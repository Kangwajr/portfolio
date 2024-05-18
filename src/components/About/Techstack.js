import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiDjango } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";

import {
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { BiLogoVuejs } from "react-icons/bi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BiLogoVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  );
}

export default Techstack;
