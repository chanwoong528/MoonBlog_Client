import React from "react";

import { projects } from "../../Data/AboutPage/Aboutme";

export default function ProjectList() {
  return (
    <div>
      <h4>ProjectList</h4>
      <ul>
        <div>
          <ul>
            {projects.map((project) => {
              //card here
              return (
                <li>
                  <div>
                    <h4>{project.title}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    </div>
  );
}
