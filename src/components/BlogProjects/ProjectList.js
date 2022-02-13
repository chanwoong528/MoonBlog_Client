import React from "react";

import { projects } from "../../Data/AboutPage/Aboutme";

import "../../styles/Components/ProjectList.scss";

export default function ProjectList() {
  return (
    <div>
      <h4>ProjectList</h4>
      <ul className="project__list">
        {projects.map((project) => {
          //card here
          return (
            <li className="project__item">
              <div className="card">
                <img src={project.img} alt={project.title} />
                <div className="card__container">
                  <h4>{project.title}</h4>
                  <p className="card__container__git">
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
