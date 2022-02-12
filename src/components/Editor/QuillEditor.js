import React, { useRef, useMemo, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";

import "highlight.js/styles/github-dark.css";
import "../../styles/Components/Editor.scss";

import customAxios from "../../config/customAxios";
hljs.configure({
  languages: ["javascript"],
});
// Quill.register();

export default function QuillEditor({
  value,
  onChange,
  containerHeight,
  editorHeight,
  type,
  readOnly,
}) {
  const quillRef = useRef();
  const imageHandler = useCallback(async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      try {
        const file = input.files[0];
        let file64 = await readFile64(file);
        const response = await customAxios.post("/file", { file64 });
        const data = await response.data;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range, "image", data.url);
      } catch (error) {
        alert("Unable to Upload Image");
        console.log(error.response);
      }
    };
  }, []);
  const readFile64 = async (file) => {
    let base64Url = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
      reader.onerror = () => {
        reject("Unable to Upload Image from [func readFile64]");
      };
    });
    return base64Url;
  };
  const modules = useMemo(() => {
    const myFormat = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "image",
      "bullet",
      "indent",
      "link",
      "align",
      "color",
      "background",
      "code-block",
    ];
    if (type === "post") {
      return {
        syntax: { highlight: (text) => hljs.highlightAuto(text).value },
        toolbar: {
          container: myFormat,
          handlers: {
            image: imageHandler,
          },
        },
      };
    } else {
      return {
        syntax: { highlight: (text) => hljs.highlightAuto(text).value },
        toolbar: {
          container: [
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "link",
            "align",
            "color",
            "background",
            "code-block",
          ],
        },
      };
    }
  }, [type, imageHandler]);

  return (
    <div>
      <h1>QuillEditor</h1>

      <div className="editor" style={{ height: containerHeight }}>
        <ReactQuill
          style={{ height: editorHeight }}
          ref={quillRef}
          theme="snow"
          placeholder={
            type === "post" ? "Wrtie Article..." : "Enter Comments..."
          }
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          modules={modules}
        />
      </div>
    </div>
  );
}
