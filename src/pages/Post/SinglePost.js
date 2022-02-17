import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { PostContext } from "../../context/PostContext";
import { CommentContext } from "../../context/CommentContext";
import customAxios from "../../config/customAxios";

import QuillEditor from "../../components/Editor/QuillEditor";

import Comments from "../../components/Comments/Comments";

import { MdDeleteForever, MdModeEdit } from "react-icons/md";

import "../../styles/Page/Post/SinglePost.scss";

export default function SinglePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { commentDispatch, comments } = useContext(CommentContext);
  const { postDispatch } = useContext(PostContext);
  const { isAdmin } = useContext(AuthContext);
  const [editmode, setEditMode] = useState(false);
  const [body, setBody] = useState("");
  console.log(post);
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await customAxios(`/post/${id}`);
        const data = await res.data;
        if (res.status === 200) {
          commentDispatch({
            type: "LOAD_COMMENTS",
            payload: {
              comments: data.post.comments,
            },
          });
          postDispatch({ type: "INC_VIEW_POST", payload: { postId: id } });
          setPost(data.post);
          setBody(data.post.body);
        }
      } catch (error) {
        console.log("getSinglePost[error]: ", error.response);
      }
    };
    getSinglePost();
  }, [id, commentDispatch, postDispatch]);
  useEffect(() => {
    const incPostViews = async () => {
      try {
        const res = await customAxios.patch(`/post/views/${id}`);
        const data = await res.data;
        console.log(data);
      } catch (error) {
        console.log("incPostViews[error]: ", error.response.data);
      }
    };
    incPostViews();
  }, [id]);

  const onChangeEditor = (value) => {
    setBody(value);
  };

  const onSubmitEditedBody = async (e) => {
    e.preventDefault();
    try {
      const res = await customAxios.patch(`/post/${id}`, { body });
      const data = await res.data;
      alert(data.msg);
      setPost((post) => {
        return { ...post, body: data.body, update_at: data.update_at };
      });
      setBody(data.body);
      setEditMode(false);
    } catch (error) {
      console.log(error.response);
      alert(error.response);
    }
  };
  const onClickDeletePost = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm("You sure to delete this post?");
    if (confirmDelete) {
      try {
        const res = await customAxios.delete(`/post/${id}`);
        const data = await res.data;
        console.log(data);
        if (res.status === 201) {
          postDispatch({ type: "DELETE_POST", payload: { postId: id } });
          navigate("/post");
        }
      } catch (error) {
        console.log(error.response);
        alert(error.response);
      }
    }
  };
  if (Object.keys(post).length === 0 && post.constructor === Object) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <main className="single-post-main">
        <div className="single-post-main__container">
          <h1 className="single-post-main__title">{post.title}</h1>
          <div className="single-post-main__date__container">
            <h4 className="single-post-main__date">
              Created at: {post.create_at.slice(0, 10)}
            </h4>
            <h4 className="single-post-main__date">
              Last Updated: {post.update_at.slice(0, 10)}
            </h4>
          </div>
          {isAdmin && !editmode && (
            <div>
              <button
                className="single-post-main__btn__del"
                onClick={onClickDeletePost}
              >
                <MdDeleteForever size={30} />
              </button>
              <button
                className="single-post-main__btn__edit"
                onClick={() => {
                  setEditMode(!editmode);
                }}
              >
                <MdModeEdit size={30} />
              </button>
            </div>
          )}
        </div>
        {editmode ? (
          <form
            className="single-post-main__editform"
            onSubmit={onSubmitEditedBody}
          >
            <div>
              <button
                className="single-post-main__editform__btn__save"
                type="submit"
              >
                Save
              </button>
              <button
                className="single-post-main__editform__btn__cancel"
                onClick={() => {
                  setEditMode(!editmode);
                }}
              >
                Cancel
              </button>
            </div>
            <QuillEditor
              value={body}
              onChange={onChangeEditor}
              editorHeight="60vh"
              containerHeight="80vh"
              type="post"
            />
          </form>
        ) : (
          <div
            className="single-post-main__body ql-editor"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
          ></div>
        )}
        {!editmode && (
          <Comments
            postId={id}
            comments={comments}
            editorHeight="10vh"
            containerHeight="10vh"
          />
        )}
      </main>
    );
  }
}
