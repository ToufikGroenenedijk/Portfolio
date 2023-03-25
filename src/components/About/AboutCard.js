import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo iedereen, ik ben <span className="purple">Toufik Groenendijk </span>
            van <span className="purple"> Zuid-holland, nederland.</span>
            <br />Ik ben een junior-medior webdeveloper.
            <br />
            <br />
            Naast coderen zijn er andere dingen die ik graag doe zoals.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gamen
            </li>
            <li className="about-activity">
              <ImPointRight /> Wordpress websites bouwen
            </li>
            <li className="about-activity">
              <ImPointRight /> reizen
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nooit opgeven er is altijd een oplossing!"{" "}
          </p>
          <footer className="blockquote-footer">Toufik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
