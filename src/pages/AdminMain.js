import React, { useEffect, useState, useContext } from "react";

import { TopicContext } from "../context/TopicContext";

import customAxios from "../config/customAxios";

export default function AdminMain() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const { topicDispatch, topics } = useContext(TopicContext);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = await customAxios("/admin/topic");
        const data = await res.data;
        console.log(data.topics);
        topicDispatch({
          type: "LOAD_TOPICS",
          payload: { topics: data.topics },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getTopics();
  }, []);

  const onSubmitTopic = async (e) => {
    e.preventDefault();
    const res = await customAxios.post("/admin/topic", { topic, description });
    const data = await res.data;
    console.log(data);
  };

  return (
    <main>
      <h1>Admin Page</h1>
      <div>
        <form onSubmit={onSubmitTopic}>
          <div>
            <label>Topic of Post To Add:</label>
            <input
              type="text"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Description of Topic:</label>
            <textarea
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add Topic</button>
        </form>
      </div>
      <div>
        <ul>
          {topics.map((topic) => {
            if (topic._id !== "0") {
              return <li key={topic._id}>{topic.topic}</li>;
            }
          })}
        </ul>
      </div>
    </main>
  );
}
