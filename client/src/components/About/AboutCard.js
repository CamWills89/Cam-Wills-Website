import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cameron Wills </span>
            from <span className="purple"> South Africa</span>
            <br />
            I am a Fullstack web developer, living in Atlanta, GA, USA.
            <br />
            <br />I fell in love with programming, with an emphasis on these technologies
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> React/Redux
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Javascript, HTML, CSS
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> MERN Stack
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
