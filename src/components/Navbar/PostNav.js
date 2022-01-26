import React from "react";

export default function PostNav() {
  const PostMenu = [
    { name: "Main", url: "/", auth: "user" },
    { name: "Post", url: "/post", auth: "user" },
    { name: "Login", url: "/auth", auth: "none" },
    { name: "Admin", url: "/admin", auth: "admin" },
  ];

  return (
    <div>
      <h1>Post Nav</h1>
    </div>
  );
}
