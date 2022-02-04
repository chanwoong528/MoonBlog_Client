import React, { useState, useContext, useEffect } from "react";

import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";

import Editor from "../../components/Editor/Editor";

export default function NewPost() {
  const { topics, topicDispatch } = useContext(TopicContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postType, setPostType] = useState(topics[0]._id);
  useEffect(() => {
    const getTopics = async () => {
      const res = await customAxios("/admin/topic");
      const data = await res.data;
      console.log("getTopics: ", data);
      if (res.status === 200) {
        topicDispatch({
          type: "LOAD_TOPICS",
          payload: { topics: data.topics },
        });
      }
    };
    getTopics();
  }, [topicDispatch]);

  const onSubmitNewPost = async (e) => {
    e.preventDefault();
    if (postType === "0") {
      return alert("Should Choose Post Type.");
    }
    if (title.length < 1) {
      return alert("Should Enter Title.");
    }
    if (body.length < 1) {
      return alert("Should Enter Content for Post.");
    }
    try {
      const res = await customAxios.post("/post", {
        title,
        body,
        postType,
      });
      const data = await res.data;
      console.log(data);
      if (res.status === 200) {
        setBody("");
        setTitle("");
      }
    } catch (error) {
      alert("Unable to create Post");
    }
  };

  const onChangeEditor = (value) => {
    setBody(value);
  };

  return (
    <div>
      <h1>Create New Post</h1>

      <div>
        <form onSubmit={onSubmitNewPost}>
          <div>
            <label>Post Type: </label>
            <select
              onChange={(e) => {
                setPostType(e.currentTarget.value);
              }}
            >
              {topics.map((topic) => {
                return <option value={topic._id}>{topic.topic}</option>;
              })}
            </select>
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Content</label>
            <Editor
              value={body}
              onChange={onChangeEditor}
              editorHeight="600px"
              containerHeight="700px"
              type="post"
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
