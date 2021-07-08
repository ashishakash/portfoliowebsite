import React from "react";
import { Button } from 'react-bootstrap';
function ProjectContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <Button href={props.link} variant="primary" size="lg" active>
          View
        </Button>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectContent;
