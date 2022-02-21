import React, { useState } from "react";
import "../../styles/Components/Timeline.scss";

export default function TimelinePoint({ className, item }) {
  const [showdetail, setShowdetail] = useState(false);
  return (
    <div className={className} onClick={() => setShowdetail(!showdetail)}>
      <div className="inner"></div>
      {showdetail && <div className="content">{item.detail}</div>}
    </div>
  );
}
