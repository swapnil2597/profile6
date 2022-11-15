import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi,
            First of all, welcome to my web profile. I am <span className="purple">Swapnil Khare </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />I am a passion driven <span className="purple">SOFTWARE DEVELOPER</span> currently based out of <span className="purple">Bangalore, India</span>.
            <br />
            <br />
            <br />
            I'm a very motivated, out-of-the-box thinker who is always trying to implement and apply theoretical knowledge to practical examples. I secured an NTSE scholarship, only awarded to the top 1000 students from a batch of 30-40lakh in INDIA. I have an intuitive mind and a never-ending knack for solving unsolved problems. I was also the runner-up in the final TV stage rounds of the "QUANTA - International Mental Ability Quiz" where I represented India and finished 2nd behind Germany.
            <br />
            <br />
            My areas of interest are:
            <br/> - <span className="purple">Python Development</span>
            <br/> - <span className="purple">Fullstack Software Development</span>
            <br/> - <span className="purple">Cosmology</span>
            <br/> - <span className="purple">High-frequency Algorithmic Trading</span>
            <br/> - <span className="purple">Actuarial Mathematics</span>
            <br/> - <span className="purple">Competitive coding in C++ and python</span>

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Poker Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Football / Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Keyboard / Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do what you love, Love what you do!"{" "}
          </p>
          <footer className="blockquote-footer">Swapnil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
