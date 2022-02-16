import React from "react";

export default function PageNumbers({ limit, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <a style={{ color: "green" }} onClick={() => paginate(num)} href="!#">
            <li key={num}>{num}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
