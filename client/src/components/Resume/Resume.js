import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import "../../style.css";
import Techstack from "./Techstack";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
            target="_blank"
          >
            <i className="fas fa-download">&nbsp;</i>View My Resume
          </Button>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="cib-html5" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="cib-redux" />
          <Techstack iconName="cib-css3 " />
          <Techstack iconName="cib-graphql" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="cib-mysql" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-github" />
          <Techstack iconName="cib-amazon-aws" />
          <Techstack iconName="cib-postman" />
          {/* <Techstack iconName="cib-zeit" /> */}
          <Techstack iconName="cib-heroku" />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
            target="_blank"
          >
            <i className="fas fa-download">&nbsp;</i>View My Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
