import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactParallaxTilt from "react-parallax-tilt";

function Library() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} >
        <ReactParallaxTilt >
          <h3><strong className="White">Numpy</strong></h3>
        </ReactParallaxTilt>
      </Col>
      <Col xs={4} md={2} >
        <ReactParallaxTilt >
          <h3><strong className="White">Opencv</strong></h3>
        </ReactParallaxTilt>
      </Col>
      <Col xs={4} md={2} >
        <ReactParallaxTilt >
          <h3><strong className="White">Matplotlib</strong></h3>
        </ReactParallaxTilt>
      </Col>
      <Col xs={4} md={2} >
        <ReactParallaxTilt >
          <h3><strong className="White">Pandas</strong></h3>
        </ReactParallaxTilt>
      </Col>
    </Row>
  );
}

export default Library;
