import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Cameron Wills</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/CamWills89"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/cameronwills89/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:cameron.wills89@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="far fa-envelope-open"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:512.940.3380"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fas fa-phone"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
