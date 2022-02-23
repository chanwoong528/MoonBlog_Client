import React, { useState } from "react";
import "../../styles/Components/Timeline.scss";

export default function TimelinePoint({ className, item }) {
  const [showdetail, setShowdetail] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setShowdetail(true)}
      onMouseLeave={() => {
        setShowdetail(false);
      }}
    >
      <div className="inner"></div>
      {showdetail && (
        <div className="content">
          <h4>{item.place}</h4>
          <p>{item.date}</p>
          <p> {item.detail}</p>
        </div>
      )}
    </div>
  );
}
