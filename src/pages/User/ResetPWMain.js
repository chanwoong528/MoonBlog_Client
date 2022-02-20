import React, { useState } from "react";
import { useParams } from "react-router-dom";
import customAxios from "../../config/customAxios";

export default function ResetPWMain() {
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const { token } = useParams();

  const onSumbitResetPW = async (e) => {
    e.preventDefault();
    console.log(token);
    const res = await customAxios.patch(`/user/pw/${token}`, {
      password,
      passwordConf,
    });
    const data = await res.data;
  };

  return (
    <div>
      ResetPWMain
      <form onSubmit={onSumbitResetPW}>
        <div>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">password</label>
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => {
              setPasswordConf(e.target.value);
            }}
          />
          <label htmlFor="password">password Confirm</label>
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
