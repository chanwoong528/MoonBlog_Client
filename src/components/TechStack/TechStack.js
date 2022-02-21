import React, { useState } from "react";
import { techStacks } from "../../Data/AboutPage/Aboutme";

import "../../styles/Components/TechStack.scss";
import Teachstackmodal from "../Modal/TechStackModal/TeachStackModal";

export default function TechStack() {
  const [showdetail, setShowdetail] = useState(false);
  const [selectedStack, setSelectedStack] = useState();
  return (
    <div className="stack__container">
      <ul className="stack__list">
        {techStacks.map((stack, index) => {
          return (
            <li
              // onMouseEnter={async() => {

              // }}
              onClick={() => {
                setSelectedStack(stack);
                setShowdetail(true);
              }}
              className={`stack__item__${index}`}
              key={stack.name}
            >
              <img src={stack.img} alt={stack.name} />
            </li>
          );
        })}
      </ul>
      {showdetail && (
        <Teachstackmodal stack={selectedStack} setShowdetail={setShowdetail} />
      )}
    </div>
  );
}
