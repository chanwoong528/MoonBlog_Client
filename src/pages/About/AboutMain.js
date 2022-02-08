import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { SiNaver, } from 'react-icons/si'

import BarChart from "../../components/Chart/BarChart";

import "../../styles/Page/About/About.scss"

export default function AboutMain() {
  // About me as well as About this blog.
  // Reason for Creation. As well as about my self with contacts
  const sns = [
    { url: "https://github.com/chanwoong528", icon: <AiFillGithub /> },
    { url: "https://blog.naver.com/cksdnd004", icon: <SiNaver /> },
    { url: "https://www.facebook.com/cksdnd004", icon: <AiFillFacebook /> }]
  const intro = 'I am a Junior Javascript Developer'

  const [typeintro, setTypeintro] = useState('')
  const [blink, setBlink] = useState(false)
  useEffect(() => {
    const check = typeintro.slice(0, typeintro.length + 1);
    if (check === intro) {
      setTimeout(() => {
        setTypeintro("")
      }, 2500)

    }
    const timeout = setTimeout(() => {
      setTypeintro(intro.slice(0, typeintro.length + 1))
    }, 100)

    return () => clearTimeout(timeout)

  }, [typeintro])
  useEffect(() => {
    setTimeout(() => {
      setBlink(!blink)
    }, 500)
  }, [blink])

  return (
    <main className="about-main">
      <h1>About Moon Blog</h1>
      <h6 className="about-main__intro">
        <strong>Hi!</strong>  {typeintro}<strong className={blink ? "blinking__show" : "blinking__hide"}>|</strong>
      </h6>


      <div className="about-main__chart">
        <h6>Skill Usages for All Projects</h6>
        <BarChart />
      </div>

      <div className="about-main__sns">
        <ul className="about-main__sns__list">
          {sns.map(item => {
            return (<a href={`${item.url}`}>
              <li className="about-main__sns__item" key={item.url} >{item.icon}
              </li>
            </a>)
          })}
        </ul>
      </div>

    </main>
  );
}
