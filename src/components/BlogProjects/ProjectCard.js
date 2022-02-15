import React, { useState } from "react";
import "../../styles/Components/ProjectList.scss";
export default function ProjectCard({ project }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="card">
      {!flip ? (
        //front of the acre
        <div className="card__front" onClick={() => setFlip(!flip)}>
          <img src={project.img} alt={project.title} />
          <div className="card__front__container">
            <h4>{project.title}</h4>
            <p className="card__front__container__git">
              <a href={project.gitUrl}>Github-URL</a>
              <a
                href={project.url}
                className={project.url === "NA" && "disabled"}
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
            <h4>{project.title}</h4>
            <p className="card__back__container__git">Description</p>
          </div>
        </div>
      )}
    </div>
  );
}
