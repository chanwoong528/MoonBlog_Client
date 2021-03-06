import React, { useState, useEffect } from "react";

import "../../styles/Page/About/About.scss";

import ProjectList from "../../components/BlogProjects/ProjectList";

import { personality, sns } from "../../Data/AboutPage/Aboutme";
import TechStack from "../../components/TechStack/TechStack";
import Timeline from "../../components/Timeline/Timeline";

export default function AboutMain() {
  // about creating this blog phase
  // Reason for Creation. As well as about my self with contacts

  const [position, setPosition] = useState(0);
  console.log(position);
  function onScrollEvent() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
    };
  }, [position]);

  return (
    <main className="about-main">
      <div className="about-main__container">
        <section className="about-main__section__blog about-main__section">
          <article>
            <h2 className="about-main__title">Moon Blog</h2>
            <p>Welcome to My Blog!</p>
            <p>This blog was made with React, ExpressJS, MongoDB</p>
            <p>
              Motivation for Developing My own Blog without using other platform
              such as 'Medium' or 'Tistory' was because it was really hard to
              see what customers needs and wants. Therefore I decided to be a
              Developer as well as customer by implementing this blog. Trying to
              use this blog as my portfolio, by posting projects that I have
              done or I am doing or I will be doing. Feedbacks are always
              welcome, you could either write me a comments, or contact me.
            </p>
          </article>
          <div className="about-main__section__blog__edu">
            <h3>Education and Experience</h3>
            <Timeline />
          </div>
          <div className="about-main__section__blog__contact">
            <h2 className="about-main__title">Contact Me</h2>
            <div className="about-main__section__blog__contact__sns">
              <ul className="about-main__section__blog__contact__sns__list">
                {sns.map((item) => {
                  return (
                    <li className="about-main__section__blog__contact__sns__item">
                      <a href={item.url}>{item.icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="about-main__section__moon about-main__section">
          <h2 className="about-main__title">About Me</h2>
          <article>
            <p>
              I am a Junior Frontend developer who finds developing an app as
              the greatest joy. Programming was not something that I was into
              when I was young, and even during college year. Basic Computer
              Science Programs were very overwhelming to me. However, when I
              started to make my own websites, web-app, it became my hobby also
              my profession. The moment of happiness when my first web had first
              user was unforgettable.
            </p>
          </article>
          <article>
            <p>
              Although, I am still very inexperienced in many ways, I try as
              much as I could to be better. I am highly motivated, self-driven,
              communicative, and fast/enjoy leaner.
            </p>
          </article>
          <article>
            <ul className="about-main__section__moon__charlist">
              {personality.map((cate) => {
                return (
                  <li style={{ listStyle: "none" }} key={cate.id}>
                    <div>
                      <h4 className="cate__title">{cate.title}</h4>
                      <p style={{ margin: "10px 0 " }}>{cate.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
          <TechStack />
        </section>
        <section className="about-main__section__project about-main__section">
          <ProjectList />
        </section>
      </div>
    </main>
  );
}
