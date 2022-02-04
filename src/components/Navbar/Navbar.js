import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, isAdmin, userDispatch } = useContext(AuthContext);

  const menus = [
    { name: "Main", url: "/", auth: "any" },
    { name: "About", url: "/about", auth: "any" },
    { name: "Post", url: "/post", auth: "any" },
    { name: "Login", url: "/auth", auth: "notLoggedIn" },
    { name: "Register", url: "/new", auth: "notLoggedIn" },
    { name: "Admin", url: "/admin", auth: "admin" },
  ];
  /*
case not logged in => main post login 
case logged in => main post 
case logged in and admin =>  main post admin
*/
  const onClickLogout = () => {
    window.localStorage.clear();
    userDispatch({ type: "LOGGED_OUT_USER" });
  };

  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        {(isLoggedIn && isAdmin
          ? menus.filter((menu) => {
              return menu.auth !== "notLoggedIn";
            })
          : isLoggedIn
          ? menus.filter((menu) => {
              return menu.auth !== "notLoggedIn" && menu.auth !== "admin";
            })
          : menus.filter((menu) => {
              return menu.auth !== "admin";
            })
        ).map((menu, index) => {
          return (
            <li key={index}>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          );
        })}
        {isLoggedIn && (
          <li onClick={onClickLogout}>
            <Link to="/auth">Log out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
