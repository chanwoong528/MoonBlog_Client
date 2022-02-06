import React, { useContext } from "react";
import { TopicContext } from "../../context/TopicContext";

import "../../styles/Navbar/PostNav.scss";

export default function PostNav({ setSelectedPostMenu, setShowPostNav }) {
  const { topics } = useContext(TopicContext);
  console.log(topics);
  const onClickSelectTopic = (topicId) => {
    console.log(topicId);
    setSelectedPostMenu(topicId);
  };

  return (
    <nav className="post-nav">
      <ul className="post-nav__list">
        {topics.map((topic) => {
          if (topic._id === "0") {
            return (
              <li
                className="post-nav__item"
                onClick={() => {
                  onClickSelectTopic(topic._id);
                  setShowPostNav(false);
                }}
                key={topic._id}
              >
                See All Articles
              </li>
            );
          }
          return (
            <li
              className="post-nav__item"
              onClick={() => {
                onClickSelectTopic(topic._id);
                setShowPostNav(false);
              }}
              key={topic._id}
            >
              {topic.topic}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
