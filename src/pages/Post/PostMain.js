import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";

import PostNav from "../../components/Navbar/PostNav";

export default function PostMain() {
  const { topicDispatch } = useContext(TopicContext);

  useEffect(() => {
    const getPosts = async () => {
      const res = await customAxios("/post");
      const data = await res.data;
      console.log("getPosts: ", data);
    };
    getPosts();
  }, []);
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

    //TODO: miss dependency of topicDispatch =? solve this by using useCallback or useMemo
    getTopics();
  }, [topicDispatch]);

  return (
    <div>
      <h1>Post Main</h1>
      <div>
        <Link to="/post/new">
          <button>Create Post</button>
        </Link>
      </div>
      <aside>
        <PostNav />
      </aside>
    </div>
  );
}
