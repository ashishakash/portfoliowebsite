import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homelogo from "../../Assets/homelogo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ReactParallaxTilt from "react-parallax-tilt";

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
              <ReactParallaxTilt>
                
                  <img src={homelogo} alt="home pic" className="img-fluid" />
                
              </ReactParallaxTilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
