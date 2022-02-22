import React from "react";

import { projects } from "../../Data/AboutPage/Aboutme";

import "../../styles/Components/ProjectList.scss";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div>
      <h1>Project List</h1>
      <ul className="project__list">
        {projects.map((project) => {
          //card here
          return (
            <li key={project.id} className="project__item">
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
