import React, { useState } from "react";

import { projects } from "../../Data/AboutPage/Aboutme";

import "../../styles/Components/ProjectList.scss";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div>
      <h4>ProjectList</h4>
      <ul className="project__list">
        {projects.map((project) => {
          //card here
          return (
            <li className="project__item">
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
