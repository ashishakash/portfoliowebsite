import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myimg from "../../Assets/myimg.jpg"
import {
  AiFillGithub,

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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am 3rd year B.Tech student from IIT Dharwad. Though I am an Electrical
              engineer but still{" "}
              <b className="purple">I fell in love with programming and i love to write codes.</b>
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple">C, C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              <i>
                But being honest I love Python. It's my favourite.
                I have done a lot of work in python like
              </i>
              <i>
                <b className="purple"> image processing using opencv. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies mobile applications </b> using
                various frameworks like{" "}
                <b className="purple">
                  Django,React and flutter.
                </b>
              </i>
              <br />
              <br />
              Moreover I have a strong interest towards{" "}
              <b className="purple">
                   Competitive programming{" "}
                </b>
              and i solve two to three problems daily on platforms like leetcode 
              and developed strong fundamentals of{" "}
              <b className="purple">
                   Data Structures and Algorithm.
                </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myimg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashishakash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashish-akash-313460193/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashish_akash_/"
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
