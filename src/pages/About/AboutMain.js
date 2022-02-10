import React, { useState, useEffect } from "react";

import "../../styles/Page/About/About.scss";
import JourneyList from "../../components/BlogJourney/JourneyList";
import ProjectList from "../../components/BlogProjects/ProjectList";

export default function AboutMain() {
  // about creating this blog phase
  // Reason for Creation. As well as about my self with contacts

  return (
    <main className="about-main">
      <h1>About Moon Blog</h1>
      <div className="about-main__container">
        <section className="about-main__section">
          <JourneyList />
        </section>
        <section className="about-main__section">
          <ProjectList />
        </section>
      </div>
    </main>
  );
}
