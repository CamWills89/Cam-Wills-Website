import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title>{props.title}</Card.Title>
      <Card.Img
        variant="top"
        rounded="true"
        fluid="true"
        src={props.imgPath}
        alt="Card image"
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="fab fa-github"></i>
          &nbsp; View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
