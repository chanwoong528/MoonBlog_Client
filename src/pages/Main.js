import React, { useState, useEffect, useContext } from "react";

import BarChart from "../components/Chart/BarChart";
import DoughnutChart from "../components/Chart/DoughnutChart";

import { PostContext } from "../context/PostContext";
import { sns } from "../Data/AboutPage/Aboutme";

import customAxios from "../config/customAxios";
import "../styles/Page/Main/Main.scss";
import Pagination from "../components/Posts/postThumbnail/Pagination";

const Phase = {
  Typing: 0,
  Pausing: 1,
  Deleting: 2,
};
const intro = [
  { str: "I am a Junior Developer", color: "red" },
  { str: "I am a Front-End Developer", color: "green" },
  { str: "I am a Javascript Developer", color: "orange" },
];
const useTypingAnimation = (intro) => {
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedstr, setTypedstr] = useState("");
  const [curidx, setCuridx] = useState(0);
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedstr = intro[curidx].str.slice(0, typedstr.length + 1);
        if (nextTypedstr === typedstr) {
          setPhase(Phase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTypedstr(nextTypedstr);
        }, 80);
        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typedstr) {
          const nextidx = curidx + 1;
          setCuridx(intro[nextidx] ? nextidx : 0);
          setPhase(Phase.Typing);
          return;
        }
        const nextRemainingstr = intro[curidx].str.slice(
          0,
          typedstr.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedstr(nextRemainingstr);
        }, 30);
        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, 300);
        return () => clearTimeout(timeout);
    }
  }, [intro, typedstr, phase, curidx]);

  return typedstr;
};

export default function Main() {
  const typeintro = useTypingAnimation(intro);
  const [blink, setBlink] = useState(false);
  const { postDispatch } = useContext(PostContext);

  const REACT_ID = { name: "React", id: "61f61403f54a97321a52423b" };
  const JS_ID = { name: "JS", id: "61f61415f54a97321a52423d" };
  const JOURNEY_ID = { name: "Blog", id: "6205ca3ba79ac79f5315ae21" };

  useEffect(() => {
    setTimeout(() => {
      setBlink(!blink);
    }, 500);
  }, [blink]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await customAxios("/post");
        const data = await res.data;
        if (res.status === 200) {
          postDispatch({ type: "LOAD_POSTS", payload: { posts: data.posts } });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="main">
      <h5 className="main__intro">
        <strong>Hi!</strong>
        <span className="main__intro__typing">{typeintro}</span>
        <strong className={blink ? "blinking__show" : "blinking__hide"}>
          |
        </strong>
      </h5>
      <section className="main__charts">
        <div className="main__chart">
          <div className="main__chart__container">
            <BarChart />
          </div>
        </div>
        <div className="main__chart">
          <div className="main__chart__container">
            <div className="main__chart__container__postlist">
              <Pagination postType={JS_ID} />
            </div>
            <div className="main__chart__container__postlist">
              <Pagination postType={REACT_ID} />
            </div>
            <div className="main__chart__container__postlist">
              <Pagination postType={JOURNEY_ID} />
            </div>
          </div>

          {
            //Pagination for JS
            //Pagination for React
            //Pagination for Journey for Blog
          }
        </div>
      </section>

      <div className="main__sns">
        <ul className="main__sns__list">
          {sns.map((item) => {
            return (
              <a href={`${item.url}`}>
                <li className="main__sns__item" key={item.url}>
                  {item.icon}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
