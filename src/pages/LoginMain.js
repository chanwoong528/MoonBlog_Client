import React, { useState } from "react";

export default function LoginMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const req = { email, password };
    try {
      const res = await fetch("http://localhost:5002/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        console.log("ok");
        localStorage.setItem("token", data.token);
        setIslogin(true);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };
  const onClickCheckLogin = async (e) => {
    try {
      const res = await fetch("http://localhost:5002/auth", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },

        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {}
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmitLogin}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Log In</button>
      </form>

      <button onClick={onClickCheckLogin}>Check Login</button>
    </div>
  );
}
