import React, { useState } from "react";
import customAxios from "../../config/customAxios";

export default function ForgotPWMain() {
  const [email, setEmail] = useState("");

  const onSumbitSendEmail = async (e) => {
    e.preventDefault();
    const res = await customAxios.post("/user/pw", { email });
    const data = await res.data;
    console.log(data);
  };

  return (
    <div>
      <h1>ForgotPWMain</h1>

      <form onSubmit={onSumbitSendEmail}>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
        </div>

        <button type="submit">Send Email to Reset Password</button>
      </form>
    </div>
  );
}
