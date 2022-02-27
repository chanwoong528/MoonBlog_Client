import React, { useEffect, useState, useContext } from "react";

import { TopicContext } from "../context/TopicContext";

import customAxios from "../config/customAxios";

import "../styles/Page/Admin/AdminMain.scss";
import TopicEditModal from "../components/Modal/TopicEditModal/TopicEditModal";

export default function AdminMain() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({});
  const [editModal, setEditModal] = useState(false);
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
      if (res.status === 201) {
        alert("Topic Created");
        topicDispatch({ type: "ADD_TOPIC", payload: { topic: data.newTopic } });
      }
    } catch (error) {
      alert("Unable to create Topic");
      console.log(error.response.data);
    }
  };
  const onClickDeleteTopic = async (delTopic, e) => {
    console.log("click [onClickDeleteTopic]");
    e.stopPropagation();
    let confirm = window.confirm("You Sure To Delete a Topic?");
    if (confirm) {
      try {
        const res = await customAxios.delete(`/admin/topic/${delTopic._id}`);
        const data = await res.data;
        if (res.status === 200) {
          topicDispatch({
            type: "DELTE_TOPIC",
            payload: { topicId: delTopic._id },
          });
        }
      } catch (error) {
        alert("Unable to Delete Topic");
        console.log(error.response);
      }
    } else {
      return;
    }
  };

  return (
    <main className="admin-main">
      <h1>Admin Page</h1>
      <form className="admin-main__form" onSubmit={onSubmitTopic}>
        <div className="admin-main__form__group">
          <label>Topic of Post To Add:</label>
          <input
            type="text"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div className="admin-main__form__group">
          <label>Description of Topic:</label>
          <textarea
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button className="admin-main__form__btn" type="submit">
          Add Topic
        </button>
      </form>

      <div className="topic__container">
        <ul className="topic__container__list">
          {topics
            .filter((topic) => topic._id !== "0")
            .map((topic) => {
              return (
                <li
                  className="topic__container__item"
                  key={topic._id}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setEditModal(true);
                  }}
                >
                  <div className="topic__container__item__info-container">
                    <h2>{topic.topic}</h2>
                    <p>{topic.description}</p>
                  </div>

                  <button
                    className="topic__container__item__btn"
                    onClick={(e) => {
                      onClickDeleteTopic(topic, e);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      {editModal && (
        <TopicEditModal topic={selectedTopic} setEditModal={setEditModal} />
      )}
    </main>
  );
}
