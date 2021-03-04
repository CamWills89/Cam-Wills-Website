import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCardFlip from "react-card-flip";

function AboutCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card className="quote-card-view front location-front-item">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="blue">Cameron Wills </span>
              from <span className="blue"> South Africa</span>
              <br />
              I am a Fullstack web developer, living in Atlanta, GA, USA.
              <br />I love to educate! So I tutor students in their{" "}
              <span className="blue"> Web Development </span> journeys!
              <br />I fell in love with programming, with an emphasis on these
              <span className="blue"> technologies: </span>
            </p>
            <ul>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> React/Redux
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Javascript, HTML,
                CSS
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> MERN Stack
              </li>
            </ul>
            <Button className="front-flip-button" onClick={handleFlip}>
              Let Me Introduce Myself
            </Button>
          </blockquote>
        </Card.Body>
      </Card>
      <Card className="quote-card-view back location-back-item">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              I am an avid<span className="blue"> Student </span>
              constantly looking to learn something new.
              <span className="blue"> Web development</span> has always been
              something I wanted to do.
              <br />
              It suits me, because there is always something new to
              <span className="blue"> learn!</span>
              <br />
              <br />
              When I am not coding, here are some things I do:
              <br />
            </p>
            <ul>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Gaming
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Watching movies and
                shows
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Spending time with
                family
              </li>
            </ul>
            <Button className="back-flip-button" onClick={handleFlip}>
              My Professional Self
            </Button>
          </blockquote>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
}

export default AboutCard;
