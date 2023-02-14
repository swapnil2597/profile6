import React from "react";
import './Techstack.css'
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const skillsArray = [
  {
    icon: <CgCPlusPlus />,
    skillName: "Skill Name"
  },
  {
    icon: <DiJavascript1 />,
    skillName: "Skill Name"
  },
  {
    icon: <DiNodejs />,
    skillName: "Skill Name"
  },
  {
    icon: <DiReact />,
    skillName: "Skill Name"
  },
  {
    icon: <DiMongodb />,
    skillName: "Skill Name"
  },
  {
    icon: <SiNextdotjs />,
    skillName: "Skill Name"
  },
  {
    icon: <DiGit />,
    skillName: "Skill Name"
  },
  {
    icon: <SiFirebase />,
    skillName: "Skill Name"
  },
  {
    icon: <DiPython />,
    skillName: "Skill Name"
  },
  {
    icon: <SiPytorch />,
    skillName: "Skill Name"
  },  
]

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillsArray.map((e) => (
        <Col xs={4} md={2} className="tech-icons skillbox">
          {e.icon}
          <span className='techicons_title'>{e.skillName}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
