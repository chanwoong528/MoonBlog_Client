import React, { useState, useContext } from "react";

import { TopicContext } from "../../../context/TopicContext";
import customAxios from "../../../config/customAxios";

import "../../../styles/Components/Modal/TopicEditModal.scss";

export default function TopicEditModal({ topic, setEditModal }) {
  const [newTitle, setNewTitle] = useState(topic.topic);
  const [newDesc, setNewDesc] = useState(topic.description);
  const { topicDispatch } = useContext(TopicContext);
  const onClickBackground = (e) => {
    e.stopPropagation();
    if (e.target.className === "topic-modal__bg") {
      setEditModal(false);
    }
  };
  const onSubmitEditTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await customAxios.patch(`/admin/topic/${topic._id}`, {
        newTitle,
        newDesc,
      });
      const data = await res.data;
      if (res.status === 200) {
        topicDispatch({
          type: "UPDATE_TOPIC",
          payload: {
            topicId: topic._id,
            topic: newTitle,
            description: newDesc,
          },
        });
        alert(data.msg);
        setEditModal(false);
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="topic-modal__bg" onClick={onClickBackground}>
      <div className="topic-modal__body">
        <form onSubmit={onSubmitEditTopic} className="topic-modal__body__form">
          <div className="topic-modal__body__form__group">
            <label>Topic of Post To Add:</label>
            <input
              type="text"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
              value={newTitle}
            />
          </div>
          <div className="topic-modal__body__form__group">
            <label>Description of Topic:</label>
            <textarea
              type="text"
              onChange={(e) => {
                setNewDesc(e.target.value);
              }}
              value={newDesc}
            />
          </div>
          <button className="topic-modal__body__form__btn" type="submit">
            Add Topic
          </button>
        </form>
      </div>
    </div>
  );
}
