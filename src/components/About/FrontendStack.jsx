import React from 'react'
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

function FrontendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons skillbox">
        <SiNextdotjs />
        <span className='techicons_title'>Next JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className='techicons_title'>Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span className='techicons_title'>Firebase Cloud Services</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className='techicons_title'>REACT</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className='techicons_title'>mognoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <span className='techicons_title'>Next JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className='techicons_title'>Next JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span className='techicons_title'>Next JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className='techicons_title'>Next JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <span className='techicons_title'>Next JS</span>
      </Col>
    </Row>
  )
}

export default FrontendStack