import React from "react";

import "../../../styles/Components/Pagination.scss";

export default function PageNumbers({ limit, totalPosts, paginate, curpage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="thumbpost__container__pagenum__list">
        {pageNumbers.map((num) => (
          <a onClick={(e) => paginate(num, e)} href="!#">
            <li
              className={`thumbpost__container__pagenum__item${
                curpage === num ? " selected" : ""
              }`}
              key={num}
            >
              {num}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
