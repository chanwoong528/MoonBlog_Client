import React, { useState, useEffect, useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";

import "../../styles/Components/Editor.scss";

import axios from "axios";

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
  const imageHandler = async () => {
    console.log("triggered");
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "gjkt4xrg");
      try {
        // const res = await customAxios.post("/file", { formData }, config); need this if we want to store it in backend
        console.log("cloudinary[request]: start");
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dwu0u1r6l/upload",
          formData
        );
        const data = await res.data;
        console.log("cloudinary[response]: ", data.url);
        const img_url = data.url;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range, "image", img_url);
      } catch (error) {
        alert("Unable to Upload Image");
        console.log(error.response);
      }
    };
  };

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
  const modules = useMemo(() => {
    if (type === "post") {
      return {
        toolbar: {
          container: myFormat,
          handlers: {
            image: imageHandler,
          },
        },
      };
    } else {
      return {
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
  }, [type]);

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
