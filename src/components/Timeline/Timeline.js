import React, { useState } from "react";

import "../../styles/Components/Timeline.scss";
import TimelinePoint from "./TimelinePoint";
export default function Timeline() {
  const desc = [
    {
      id: 1,
      place: "Brent International School",
      date: "2007.05 ~ 2010.05",
      detail: "Highschool in Philippines Graduated",
    },
    {
      id: 2,
      place: "Iowa State University",
      date: "2013.01 ~ 2020.12",
      detail: "Computer Science Graduated",
    },
    {
      id: 3,
      place: "Signetics",
      date: "2021.08 ~ current",
      detail: "Web Developer",
    },
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
