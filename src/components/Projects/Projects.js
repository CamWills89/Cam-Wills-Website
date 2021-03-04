import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import autoTracker from "../../Assets/work/auto-tracker.PNG";
import livingReal from "../../Assets/work/living-real.PNG";
import citizenPortal from "../../Assets/work/citizen-portal.PNG";
import Shop from "../../Assets/work/shop-shop.PNG";
import bookSearch from "../../Assets/work/book-search.PNG";

function Projects() {
  return (
    <Container fluid="true" className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please have a look at some recent work I've done:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livingReal}
              title="Living Real"
              description="A Realty Management Tool for a Private Owner. This is a 3-part functional site to advertise their properties, manage tenants and properties."
              link="https://github.com/CamWills89/living-real"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoTracker}
              title="Auto Tracker"
              description="This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device."
              link="https://github.com/CamWills89/auto-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citizenPortal}
              title="Citizen Portal"
              description="A one-stop shop to get all your election information. See when an election is taking place in your area. View your representatives on a local, statewide and counrty-wide level."
              link="https://github.com/CamWills89/citizen-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              title="Shop-Shop"
              description="This is an e-commerce application that allows users to shop for various items, add these products to the shopping cart, manage the shopping cart by increasing and decreasing quantities, check out their purchases and see their order history."
              link="https://github.com/CamWills89/redux-store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookSearch}
              title="Book Search"
              description="Book Search allows users to save book searches to their profile and view the books and their details. The application is built using Google Books API so that users can click a link that takes them to google books."
              link="https://github.com/CamWills89/book-search-engine"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
