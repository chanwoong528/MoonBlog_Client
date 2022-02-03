import React, { useState, useContext, useEffect } from "react";

import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";

import Editor from "../../components/Editor/Editor";

export default function NewPost() {
  const { topics } = useContext(TopicContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postType, setPostType] = useState(topics[0]);

  //TODO: get All of the posts

  const onSubmitNewPost = async (e) => {
    e.preventDefault();
    console.log(title, body, postType);
    const res = await customAxios.post("/post", { title, body, postType });
    const data = await res.data;
    console.log(data);
  };
  const onChangeEditor = (value) => {
    console.log(value);
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
            <Editor value={body} onChange={onChangeEditor} />
            {/* <textarea
              cols="30"
              rows="10"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea> */}
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
