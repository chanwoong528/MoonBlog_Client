import React from "react";
import "../../styles/Components/Modal/ProjectModal.scss";

export default function ProjectModal({ project, setShowmodal }) {
  console.log(project);
  const onClickBackground = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.className === "project-modal__bg") {
      setShowmodal(false);
    }
  };
  return (
    <div className="project-modal__bg" onClick={onClickBackground}>
      <div className="project-modal__body">
        <div className="project-modal__body__desc">
          <h2>Description</h2>
          <p>
            {
              //summary
            }
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime
            suscipit ipsa iure quibusdam quis, repellendus saepe perspiciatis
            cum amet adipisci inventore reprehenderit molestiae aperiam ratione
            quod perferendis odit impedit?
          </p>
        </div>
        <div className="project-modal__body__key">
          {
            //keyfunc
          }
        </div>
        <div className="project-modal__body__imgs">
          <h2>image Container</h2>
          <ul>
            {project.viewImg?.map((imgUrl, index) => (
              <img src={imgUrl} alt={`${index}_img`} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
