import React, { useEffect, useState } from "react";

export default function AdminMain() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  useEffect(async () => {
    const res = await fetch("http://localhost:5002/admin/topic", {
      method: "GET",
      headers: {
        //TODO: localStorage.getItem => to get Item
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data.topics);
  }, []);
  const onSubmitTopic = async (e) => {
    e.preventDefault();
    console.log(topic, description);
    const req = { topic, description };
    const res = await fetch("http://localhost:5002/admin/topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
      credentials: "include",
    });
    const data = await res.json();
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
