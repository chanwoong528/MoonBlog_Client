import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../../config/customAxios";

import { TopicContext } from "../../context/TopicContext";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

import PostNav from "../../components/Navbar/PostNav";
import PostsList from "../../components/Posts/PostsList";

import "../../styles/Page/Post/PostMain.scss";

export default function PostMain() {
  const { topicDispatch, topics } = useContext(TopicContext);
  const { postDispatch, posts } = useContext(PostContext);
  const { isAdmin } = useContext(AuthContext);
  const [selectedPostMenu, setSelectedPostMenu] = useState("0");
  const [showPostnav, setShowPostNav] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await customAxios("/post");
        const data = await res.data;
        console.log("getPosts: ", data);
        if (res.status === 200) {
          postDispatch({ type: "LOAD_POSTS", payload: { posts: data.posts } });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getPosts();
  }, [postDispatch]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = await customAxios("/admin/topic");
        const data = await res.data;
        console.log("getTopics: ", data);
        if (res.status === 200) {
          topicDispatch({
            type: "LOAD_TOPICS",
            payload: { topics: data.topics },
          });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    //TODO: miss dependency of topicDispatch =? solve this by using useCallback or useMemo
    getTopics();
  }, [topicDispatch]);

  return (
    <main className="post-main">
      <h1 className="post-main__title">Post Main</h1>

      {isAdmin && (
        <div>
          <Link to="/post/new">
            <button className="post-main__btn">Create Post</button>
          </Link>
        </div>
      )}
      <section className="post-main__section">
        <aside
          onClick={() => {
            setShowPostNav(!showPostnav);
          }}
          className={
            showPostnav
              ? "post-main__section__aside__active"
              : "post-main__section__aside"
          }
        >
          <PostNav
            setSelectedPostMenu={setSelectedPostMenu}
            setShowPostNav={setShowPostNav}
          />
        </aside>
        <aside
          onMouseOver={() => {
            setShowPostNav(true);
          }}
          className="post-main__section__aside__pull"
        >
          Category of Posts
        </aside>
        <section>
          {topics
            .filter((topic) => topic._id === selectedPostMenu)
            .map((topic) => {
              return (
                <PostsList
                  key={topic._id}
                  posts={posts.filter((post) => {
                    if (topic._id === "0") {
                      return post;
                    }
                    return post.postType === topic._id;
                  })}
                  topic={topic}
                />
              );
            })}
        </section>
      </section>
    </main>
  );
}
