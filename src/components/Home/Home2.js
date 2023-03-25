import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laat me mijzelf <span className="purple"> INTRODUCEREN </span> 
            </h1>
            <p className="home-about-body">
              ik hou van programeren, ik ben vroeg begonnen met het leren van talen zoals html en css. gelukkig ben ik daar iets van opgeschoten.  🤷‍♂️
              <br />
              <br />Ik ben goed in talen zoals
              <i>
                <b className="purple"> PHP, Javascript en css. </b>
              </i>
              <br />
              <br />
              Mijn intereses zijn voornamelijk nieuwe dingen leren in de web development wereld. &nbsp;
              <i>
                <b className="purple">programeer talen en software </b> Ook dingen gerelateerd met{" "}
                <b className="purple">
                  frameworks en programas zoals wordpress.
                </b>
              </i>
              <br />
              <br />
              Waneer het kan doe ik zoveel mogelijk werk met <b className="purple">Node.js</b> en
              <i>
                <b className="purple">
                  {" "}
                  moderne javascript frameworks
                </b>
              </i>
              &nbsp; zoals
              <i>
                <b className="purple"> React.js en Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Vindt mij op</h1>
            <p>
              neem graag <span className="purple">contact op </span>met mij
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumssyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumsyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/fin/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.fcom/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
