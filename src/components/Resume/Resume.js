import React from 'react';
import resume from '../../assets/resume/Resume.pdf';
import { saveAs } from "file-saver";

const Resume = () => {
  const saveFile = () => {
    saveAs(
        "https://docs.google.com/document/d/1NeSGxoxcwJDC9yrhRIgHmBX5dRUktCYgtF9IaQ7dEKk/edit?usp=sharing",
        "Resume.pdf"
    );
  };
  return (
    <div>
      <button onClick={saveFile}>Download My Resume</button>
    </div>
  );
}

export default Resume 