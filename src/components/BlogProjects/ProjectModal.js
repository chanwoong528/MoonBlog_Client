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
          <h2>📑 Description</h2>
          <p>{project.summary}</p>
        </div>
        <div className="project-modal__body__key">
          <h2>🔑 Key Features</h2>
          <ul>
            {project.keyFunc?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="project-modal__body__lesson">
          <h2>📖 What I learned</h2>
          <ul>
            {project.lesson?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {project.viewImg.length > 0 && (
          <div className="project-modal__body__imgs">
            <h2>📸 Screen Shots</h2>
            <ul>
              {project.viewImg?.map((imgUrl, index) => (
                <img src={imgUrl} alt={`${index}_img`} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
