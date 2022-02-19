import React, { useState } from "react";

import customAxios from "../../config/customAxios";

import "../../styles/Page/User/Register.scss";

export default function RegisterMain() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const onSubmitRegisterUser = async (e) => {
    e.preventDefault();
    try {
      console.log("req.body: ", email, name, password, passwordConf);
      const res = await customAxios.post("/user", {
        email,
        name,
        password,
        passwordConf,
      });
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const onClickLabel = (e) => {
    e.target.previousSibling.focus();
  };

  return (
    <main className="main-reg">
      <h1>Register New User</h1>

      <div className="main-reg__form-container">
        <form
          className="main-reg__form-container__form"
          onSubmit={onSubmitRegisterUser}
        >
          <div className="main-reg__form-container__group">
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label onClick={onClickLabel}>Email</label>
          </div>
          <div className="main-reg__form-container__group">
            <input
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label onClick={onClickLabel}>Name </label>
          </div>
          <div className="main-reg__form-container__group">
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label onClick={onClickLabel}>Password </label>
          </div>
          <div className="main-reg__form-container__group">
            <input
              type="password"
              required
              onChange={(e) => {
                setPasswordConf(e.target.value);
              }}
            />
            <label onClick={onClickLabel}>Confirm Password </label>
          </div>
          <button className="main-reg__form-container__form__btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
