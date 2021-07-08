import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ProjectContent from "./ProjectContent";
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
            <ProjectContent
              title="Gymkhana Website for college"
              link="https://github.com/IIT-Dharwad-Tech/Gymkhana"
              content={[
                "In this project I along with my team made a website for our Gymkhana using React Js for frontend part and Node Js for backend."
              ]}
            />
            <ProjectContent
              title="Data Analysis Covid Cases"
              link="https://github.com/AtulSingh-Emyre/Data-Analysis-Covid-cases"
              content={[
                "This project is the anslysis of Covid-19 cases, where we find all the conditions on which covid cases depends like age,altitude and many more.The enire project consists of various plots,graphs and analysis on jupyter notebook using python libraries like matplotlib,pandas and keras."
              ]}
            />
            <ProjectContent
              title="Crew Brew App(Coffee choices for employee) using Flutter"
              link="https://github.com/ashishakash/portfoliowebsite"
              content={[
                "This is a simple mobile application where employee of a company could log in and choose what kind of coffee they like so that other employee could know abt their taste. It is developed using flutter for android. "
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
              content={["Precentage: 10 cgpa"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rating in leetcode 1523`,
                `Current rating in codeforces  730`,
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
