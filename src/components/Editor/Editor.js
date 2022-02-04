import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class EditorComponent extends React.Component {
  constructor(props) {
    console.log("@@@@@@@@@@@@@@", props);
    super(props);
  }

  render() {
    const { value, onChange, containerHeight, editorHeight, type, readOnly } =
      this.props;

    let modules = {
      toolbar: [
        //[{ 'font': [] }],
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
        ["code-block"],
      ],
    };
    let formats = [
      //'font',
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "align",
      "color",
      "background",
      "code-block",
    ];
    if (type === "post") {
    } else {
      formats = [
        //'font',
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
      ];
      modules = {
        toolbar: [
          //[{ 'font': [] }],
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [],
          ["link"],
          [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
          ["clean"],
          ["code-block"],
        ],
      };
    }
    return (
      <div style={{ height: containerHeight }}>
        <ReactQuill
          style={{ height: editorHeight }}
          theme="snow"
          readOnly={readOnly}
          modules={modules}
          formats={formats}
          value={value || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML())
          }
          placeholder={
            readOnly
              ? "Please Login to Enter Comments..."
              : type === "post"
              ? "Wrtie Article..."
              : "Enter Comments..."
          }
        />
      </div>
    );
  }
}
export default EditorComponent;
