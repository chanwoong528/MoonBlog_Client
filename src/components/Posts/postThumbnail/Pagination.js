import React, { useEffect, useState } from "react";

export default function Pagination({ posts, title }) {
  //5 per page
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  useEffect(() => {
    setNumPage(limit / posts.length);
  }, []);

  return <div></div>;
}
