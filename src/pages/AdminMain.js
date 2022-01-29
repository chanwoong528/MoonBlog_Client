import React, { useEffect, useState } from "react";
import customAxios from "../config/customAxios";

export default function AdminMain() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTopics = async () => {
      const res = await customAxios("/admin/topic");
      const data = await res.data;
      console.log(data.topics);
    };
    getTopics();
  }, []);

  const onSubmitTopic = async (e) => {
    e.preventDefault();
    const res = await customAxios("admin/topic", { topic, description });
    const data = await res.data;
    console.log(data);
  };

  return (
    <div>
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
    </div>
  );
}
