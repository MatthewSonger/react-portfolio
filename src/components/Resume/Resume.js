import React from 'react';
import resume from '../../assets/resume/Resume.pdf';
import { saveAs } from "file-saver";


const Resume = () => {
  const saveFile = () => {
    saveAs(
        resume,
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