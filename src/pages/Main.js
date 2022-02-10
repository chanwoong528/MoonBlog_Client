import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import BarChart from "../components/Chart/BarChart";
import DoughnutChart from "../components/Chart/DoughnutChart";

import "../styles/Page/Main/Main.scss";

export default function Main() {
  const sns = [
    { url: "https://github.com/chanwoong528", icon: <AiFillGithub /> },
    { url: "https://blog.naver.com/cksdnd004", icon: <SiNaver /> },
    { url: "https://www.facebook.com/cksdnd004", icon: <AiFillFacebook /> },
  ];
  const intro = "I am a Javascript Developer";
  const [typeintro, setTypeintro] = useState("");
  const [blink, setBlink] = useState(false);
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
            <DoughnutChart />
          </div>
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
