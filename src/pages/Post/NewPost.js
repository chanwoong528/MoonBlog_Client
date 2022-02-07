import React, { useState, useContext, useEffect } from "react";

import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";

import Editor from "../../components/Editor/Editor";

import "../../styles/Page/Post/NewPost.scss";

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
      console.log(error.response.data);
      alert("Unable to create Post");
    }
  };

  const onChangeEditor = (value) => {
    setBody(value);
  };

  return (
    <main className="newpost-main">
      <h1>Create New Post</h1>

      <form onSubmit={onSubmitNewPost}>
        <div className="newpost-main__header__container">
          <div className="newpost-main__formgroup">
            <label>Post Type: </label>
            <select
              className="newpost-main__formgroup__inputbox"
              onChange={(e) => {
                setPostType(e.currentTarget.value);
              }}
            >
              {topics.map((topic) => {
                return (
                  <option
                    className="newpost-main__formgroup__inputbox__options"
                    value={topic._id}
                  >
                    {topic.topic}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="newpost-main__formgroup">
            <label>Title</label>
            <input
              className="newpost-main__formgroup__inputbox"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <button className="newpost-main__btn" type="submit">
            Create Post
          </button>
        </div>
        <div className="newpost-main__formgroup">
          <label>Content</label>
          <Editor
            value={body}
            onChange={onChangeEditor}
            editorHeight="60vh"
            containerHeight="80vh"
            type="post"
          />
        </div>
      </form>
    </main>
  );
}
