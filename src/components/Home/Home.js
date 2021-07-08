import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homologo from "../../Assets/homologo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from 'react-parallax-tilt';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I Am
                <strong className="main-name"> Ashish Akash</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={homologo} alt="home pic" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
