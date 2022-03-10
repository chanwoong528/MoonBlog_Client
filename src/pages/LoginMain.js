import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { baseUrl } from "../config/customAxios";

import "../styles/Page/Login/LoginMain.scss";

export default function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userDispatch } = useContext(AuthContext);
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const regexp = /^\S*$/;
    if (!regexp.test(email) || !regexp.test(password)) {
      return alert("Email or Password should not have White space.");
    }
    const req = { email, password };

    try {
      const res = await fetch(`${baseUrl}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        console.log("onSubmitLogin[response]: ", data);
        userDispatch({
          type: "LOGGED_IN_USER",
          payload: {
            isLoggedIn: data.isLoggedIn,
            isAdmin: data.user.admin,
            user: data.user,
          },
        });
        localStorage.setItem("accToken", data.accToken);
        localStorage.setItem("refToken", data.refToken);
      } else {
        if (res.status === 401) {
          alert(data.msg);
        }
      }
    } catch (err) {
      console.log("err: ", err.response.data);
    }
  };
  return (
    <main className="login-main">
      <h1 className="login-main__title">Login Page</h1>
      <form className="login-main__form" onSubmit={onSubmitLogin}>
        <div className="login-main__form__group">
          <input
            type="text"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="login-main__form__group__label">Email </label>
        </div>
        <div className="login-main__form__group">
          <input
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="login-main__form__group__label">Password </label>
        </div>
        <button className="login-main__form__btn" type="submit">
          Log In
        </button>
      </form>
      <div>
        <Link to="/user/pw">forgotpw?</Link>
      </div>
    </main>
  );
}
