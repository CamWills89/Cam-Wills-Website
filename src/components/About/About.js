import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutcard from "./AboutCard";
import profileImg from "../../Assets/profile/Profile1.jpg";
import Github from "../About/Github";

function About() {
  return (
    <Container fluid="true" className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "5px" }}
            className="about-img"
          >
            <Image src={profileImg} alt="about" className="img-fluid" rounded="true" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <Github />
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="blue">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/CamWills89"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/cameronwills89/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </Container>
  );
}

export default About;
