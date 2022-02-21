import React, { useState } from "react";

import "../../styles/Components/Timeline.scss";
import TimelinePoint from "./TimelinePoint";
export default function Timeline() {
  const desc = [
    { id: 1, detail: "Highschool in Philippines" },
    { id: 2, detail: "Iowa State University Computer Science" },
    { id: 3, detail: "Signetics Web Developer" },
    { id: 4, detail: "4" },
  ];

  return (
    <div className="timeline">
      <div className="timeline__point__container">
        {desc.map((item) => {
          return (
            <TimelinePoint
              className={`timeline__point__${item.id}`}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
