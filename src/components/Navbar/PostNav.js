import React, { useContext } from "react";
import { TopicContext } from "../../context/TopicContext";

export default function PostNav({ setSelectedPostMenu }) {
  const { topics } = useContext(TopicContext);
  console.log(topics);
  const onClickSelectTopic = (topicId) => {
    console.log(topicId);
    setSelectedPostMenu(topicId);
  };

  return (
    <nav>
      <h1>Post Nav</h1>
      <ul>
        {topics.map((topic) => {
          if (topic._id === "0") {
            return (
              <li
                onClick={() => {
                  onClickSelectTopic(topic._id);
                }}
                key={topic._id}
              >
                See All Articles
              </li>
            );
          }
          return (
            <li
              onClick={() => {
                onClickSelectTopic(topic._id);
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
