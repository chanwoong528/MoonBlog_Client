import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import customAxios from "./config/customAxios";

import { AuthContext } from "./context/AuthContext";
import { TopicProvider } from "./context/TopicContext";

import Navbar from "./components/Navbar/Navbar";

import Main from "./pages/Main";
import PostMain from "./pages/Post/PostMain";
import NewPost from "./pages/Post/NewPost";

import AdminMain from "./pages/AdminMain";
import LoginMain from "./pages/LoginMain";

function App() {
  const { userDispatch, isLoggedIn, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    const checkLogin = async () => {
      const res = await customAxios("/auth");
      console.log("checkLogin: ", res);
      if (res.status === 200) {
        userDispatch({
          type: "LOGGED_IN_USER",
          payload: {
            isLoggedIn: res.data.isLoggedIn,
            isAdmin: res.data.user.admin,
            user: res.data.user,
          },
        });
      } else {
        userDispatch({
          type: "LOGGED_OUT_USER",
        });
      }
    };
    checkLogin();
  }, [userDispatch]);
  return (
    <>
      <TopicProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<PostMain />} />
          <Route path="/post/new" element={isAdmin ? <NewPost /> : <Main />} />
          <Route path="/admin" element={isAdmin ? <AdminMain /> : <Main />} />

          <Route path="/auth" element={isLoggedIn ? <Main /> : <LoginMain />} />
        </Routes>
      </TopicProvider>
    </>
  );
}

export default App;
