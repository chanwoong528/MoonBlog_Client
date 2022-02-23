import React, { useState } from "react";
import "../../styles/Components/ProjectList.scss";
import ProjectModal from "./ProjectModal";
export default function ProjectCard({ project }) {
  const [flip, setFlip] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const onClickDetailModal = (e) => {
    e.stopPropagation();
    setShowmodal(!showmodal);
  };

  return (
    <div className="card">
      {!flip ? (
        //front of the acre
        <div className="card__front" onClick={() => setFlip(!flip)}>
          <img src={project.img} alt={project.title} />
          <div className="card__front__container">
            <h4>{project.title}</h4>
            <p className="card__front__container__git">
              <a
                className={project.gitUrl === "NA" ? "disabled" : ""}
                href={project.gitUrl}
              >
                Github-URL
              </a>
              <a
                href={project.url}
                className={project.url === "NA" ? "disabled" : ""}
              >
                Web-URL
              </a>
            </p>
          </div>
        </div>
      ) : (
        //back of the card
        <div className="card__back" onClick={() => setFlip(!flip)}>
          <div className="card__back__container">
            <header>
              <h4>{project.title}</h4>
              <div className="card__back__container__stack">
                <h4>Stacks:</h4>
                {project.stackImg.map((imgUrl) => (
                  <img src={imgUrl} alt={project.title} />
                ))}
              </div>
            </header>
            <div className="card__back__container__desc">
              <h4>Summary: </h4>
              <p>{project.summary}</p>
            </div>
            <footer>
              <button onClick={onClickDetailModal}>SeeDetail</button>
            </footer>
          </div>
        </div>
      )}
      {showmodal && (
        <ProjectModal project={project} setShowmodal={setShowmodal} />
      )}
    </div>
  );
}
