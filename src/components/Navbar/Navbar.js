import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menus = [
    { name: "Main", url: "/", auth: "none" },
    { name: "Post", url: "/post", auth: "none" },
    { name: "Login", url: "/auth", auth: "none" },
    { name: "Admin", url: "/admin", auth: "admin" },
  ];

  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
