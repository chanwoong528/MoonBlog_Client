import React from "react";
import { techStacks } from "../../Data/AboutPage/Aboutme";

import "../../styles/Components/TechStack.scss";

export default function TechStack() {
  return (
    <div className="stack__container">
      <ul className="stack__list">
        {techStacks.map((stack, index) => {
          return (
            <li className={`stack__item__${index}`} key={stack.name}>
              <img src={stack.img} alt={stack.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
