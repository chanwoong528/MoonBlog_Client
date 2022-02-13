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

  const linkHandler = useCallback((value) => {
    const editor = quillRef.current.getEditor();
    if (value) {
      let href = prompt("Enter the URL", "https://");
      let basehttps = "https://";
      if (href.slice(0, 8) === basehttps) {
        editor.format("link", href);
      } else {
        editor.format("link", basehttps + href);
      }
    } else {
      editor.format("link", false);
    }
  }, []);
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
      { header: [1, 2, 3, 4, 5, 6, false] },
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { color: [] },
      { background: [] },
      "image",
      "link",
      { align: [] },
      "code-block",
    ];

    if (type === "post") {
      return {
        syntax: { highlight: (text) => hljs.highlightAuto(text).value },
        toolbar: {
          container: myFormat,
          handlers: {
            image: imageHandler,
            link: linkHandler,
          },
        },
      };
    } else {
      return {
        syntax: { highlight: (text) => hljs.highlightAuto(text).value },
        toolbar: {
          container: [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "link",
            { color: [] },
            { background: [] },
            "code-block",
          ],
          handlers: {
            link: linkHandler,
          },
        },
      };
    }
  }, [type, imageHandler, linkHandler]);

  return (
    <div>
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
