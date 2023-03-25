import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgTrello } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiEnvato,
  DiPhp,
  DiGit,
} from "react-icons/di";
import {
  SiAdobephotoshop,
  SiBigcommerce,
  SiCloudways,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEnvato />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudways />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBigcommerce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
    </Row>
  );
}

export default Techstack;
