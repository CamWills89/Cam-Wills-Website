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
          Professional <strong className="blue">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-javascript-plain " name="Javascript" />
          <Techstack iconName="cib-html5" name="HTML" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" name="MongoDb" />
          <Techstack
            iconName="devicon-express-original-wordmark"
            name="Express.js"
          />
          <Techstack
            iconName="devicon-react-original-wordmark"
            name="React.js"
          />
          <Techstack iconName="devicon-nodejs-plain-wordmark " name="Node.js" />
          <Techstack iconName="cib-redux" name="Redux" />
          <Techstack iconName="cib-css3 " name="CSS" />
          <Techstack iconName="cib-graphql" name="GraphQL" />
          <Techstack iconName="devicon-git-plain-wordmark" name="Git" />
          <Techstack
            iconName="devicon-bootstrap-plain-wordmark"
            name="Bootstrap"
          />
          <Techstack iconName="cib-mysql" name="MYSQL" />
        </Row>
        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" name="VS Code" />
          <Techstack iconName="cib-github" name="Github" />
          <Techstack iconName="cib-amazon-aws" name="AWS" />
          <Techstack iconName="cib-kubernetes" name="Kubernetes" />
          <Techstack iconName="cib-postman" name="Postman" />
          {/* <Techstack iconName="cib-zeit" /> */}
          <Techstack iconName="cib-heroku" name="Heroku" />
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
