import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

import PostNav from "../../components/Navbar/PostNav";
import MainPostList from "../../components/Posts/MainPostList";
import PostsList from "../../components/Posts/PostsList";

export default function PostMain() {
  const { topicDispatch, topics } = useContext(TopicContext);
  const { postDispatch, posts } = useContext(PostContext);
  const { isAdmin } = useContext(AuthContext);
  const [selectedPostMenu, setSelectedPostMenu] = useState("0");
  useEffect(() => {
    const getPosts = async () => {
      const res = await customAxios("/post");
      const data = await res.data;
      console.log("getPosts: ", data);
      if (res.status === 200) {
        postDispatch({ type: "LOAD_POSTS", payload: { posts: data.posts } });
      }
    };
    getPosts();
  }, [postDispatch]);
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
      {isAdmin && (
        <div>
          <Link to="/post/new">
            <button>Create Post</button>
          </Link>
        </div>
      )}

      <aside>
        <PostNav setSelectedPostMenu={setSelectedPostMenu} />
      </aside>

      <section>
        {selectedPostMenu === "0" ? (
          <MainPostList posts={posts} />
        ) : (
          <>
            {topics
              .filter(
                (topic) => topic._id !== "0" && topic._id === selectedPostMenu
              )
              .map((topic) => {
                return (
                  <ul>
                    <li key={topic._id}>
                      <PostsList
                        posts={posts.filter(
                          (post) => post.postType === topic._id
                        )}
                        topic={topic}
                      />
                    </li>
                  </ul>
                );
              })}
          </>
        )}
      </section>
    </div>
  );
}
