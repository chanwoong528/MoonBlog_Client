import React from "react";

import { sns } from "../../Data/AboutPage/Aboutme";

export default function Contact() {
  return (
    <div className="about-main__section__blog__contact">
      <h2 className="about-main__title">Contact Me</h2>
      <div className="about-main__section__contact__sns">
        <ul className="about-main__section__contact__sns__list">
          {sns.map((item) => {
            return (
              <li className="about-main__section__contact__sns__item">
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
