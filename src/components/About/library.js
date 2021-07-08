import React from "react";
import { Col, Row } from "react-bootstrap";



function Library() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} >
        <h3><strong className="purple">Numpy</strong></h3>
      </Col>
        <Col xs={4} md={2} >
        <h3><strong className="purple">Opencv</strong></h3>
      </Col>
        <Col xs={4} md={2} >
        <h3><strong className="purple">Matplotlib</strong></h3>
      </Col>
    </Row>
  );
}

export default Library;
