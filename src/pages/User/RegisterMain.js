import React, { useState } from "react";

import customAxios from "../../config/customAxios";

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

  return (
    <main>
      <h1>Register New User</h1>

      <div>
        <form onSubmit={onSubmitRegisterUser}>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email </label>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Name </label>
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password </label>
          </div>
          <div>
            <input
              type="passwordConf"
              onChange={(e) => {
                setPasswordConf(e.target.value);
              }}
            />
            <label>Confirm Password </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  );
}
