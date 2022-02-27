import React from "react";
import { TiTimes } from "react-icons/ti";

import "../../../styles/Components/Modal/TechStackModal.scss";
const Teachstackmodal = ({ stack, setShowdetail }) => {
  console.log("opened!");
  const onClickBackground = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.className === "stack-modal__bg") {
      setShowdetail(false);
    }
  };

  return (
    <div className="stack-modal__bg" onClick={onClickBackground}>
      <div className="stack-modal__body">
        <button
          onClick={() => {
            setShowdetail(false);
          }}
          className="project-modal__body__btn"
        >
          <TiTimes />
        </button>
        <header className="stack-modal__body__header">
          <img src={stack.img} alt={stack.name} />
        </header>

        <div className="stack-modal__body__content__did">
          <h2>What I have Done with : {stack.name}</h2>
          <ul>
            {stack.did.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {stack.willdo.length > 0 && (
          <div className="stack-modal__body__content__willdo">
            <h2>What I will be doing and improve on: {stack.name}</h2>
            <ul>
              {stack.willdo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachstackmodal;
