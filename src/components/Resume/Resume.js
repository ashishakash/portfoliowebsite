import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/ashishakash.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Gymkhana Website for college"
              date="June 2020 - August 2020"
              content={[
                "Lorem ipsum dolor sit amet. Et iure esse et blanditiis quis eos quia quaerat in consequatur accusamus est quidem dolor. Eum tenetur quasi sit iusto voluptates id dolor quam. Est ratione officiis in internos quos eos assumenda minima."
              ]}
            />
            <Resumecontent
              title="Data Analysis Covid Cases"
              date="June 2020 - August 2020"
              content={[
                "Lorem ipsum dolor sit amet. Et iure esse et blanditiis quis eos quia quaerat in consequatur accusamus est quidem dolor. Eum tenetur quasi sit iusto voluptates id dolor quam. Est ratione officiis in internos quos eos assumenda minima."
              ]}
            />
            <Resumecontent
              title="Crew Brew App(Coffee choices for employee) using Flutter"
              date="June 2020 - August 2020"
              content={[
                "Lorem ipsum dolor sit amet. Et iure esse et blanditiis quis eos quia quaerat in consequatur accusamus est quidem dolor. Eum tenetur quasi sit iusto voluptates id dolor quam. Est ratione officiis in internos quos eos assumenda minima."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electrical Engineer [IIT Dharwad] "
              date="2019 - Present"
              content={[`CGPA: 9.31 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Bright Career School,Purnea,Bihar]"
              date="2016 - 2018"
              content={["Precentage: 93%"]}
            />
            <Resumecontent
              title="10TH BOARD [St Peter's School,Purnea,Bihar] "
              date="2006 - 2016"
              content={["Precentage: 10cgpa"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rating in leetcode 1524`,
                `Current rating in codeforces  720`,
                "Secured a rank of 4662 in Google Hashcode 2021",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
