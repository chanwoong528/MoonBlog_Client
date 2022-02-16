import React, { useState, useEffect, useContext } from "react";

import BarChart from "../components/Chart/BarChart";
import DoughnutChart from "../components/Chart/DoughnutChart";

import { PostContext } from "../context/PostContext";
import { sns } from "../Data/AboutPage/Aboutme";

import customAxios from "../config/customAxios";
import "../styles/Page/Main/Main.scss";
import Pagination from "../components/Posts/postThumbnail/Pagination";

export default function Main() {
  const intro = "I am a Javascript Developer";
  const [typeintro, setTypeintro] = useState("");
  const [blink, setBlink] = useState(false);
  const { posts, postDispatch } = useContext(PostContext);

  const REACT_ID = "61f61403f54a97321a52423b";
  const JS_ID = "61f61415f54a97321a52423d";
  const JOURNEY_ID = "6205ca3ba79ac79f5315ae21";
  useEffect(() => {
    const check = typeintro.slice(0, typeintro.length + 1);
    if (check === intro) {
      setTimeout(() => {
        setTypeintro("");
      }, 2500);
    }
    const timeout = setTimeout(() => {
      setTypeintro(intro.slice(0, typeintro.length + 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [typeintro]);
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
        <strong>Hi!</strong> {typeintro}
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
            <Pagination postType={JS_ID} />
          </div>
          <div className="main__chart__container">
            <Pagination postType={REACT_ID} />
          </div>
          <div className="main__chart__container">
            <Pagination postType={JOURNEY_ID} />
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
