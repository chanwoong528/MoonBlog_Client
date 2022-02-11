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
        console.log(error.response.data);
      }
    };
    getTopics();
  }, [topicDispatch]);

  const onSubmitTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await customAxios.post("/admin/topic", {
        topic,
        description,
      });
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const onClickDeleteTopic = async (delTopic) => {
    try {
      console.log(delTopic._id);
      const res = await customAxios.delete(`/admin/topic/${delTopic._id}:`);
    } catch (error) {
      console.log(error.response);
    }
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
          {topics
            .filter((topic) => topic._id !== "0")
            .map((topic) => {
              return (
                <li key={topic._id}>
                  {topic.topic}
                  <button
                    onClick={(e) => {
                      onClickDeleteTopic(topic);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}
