import React from 'react';
import resume from '../../assets/resume/Resume.pdf';
import { saveAs } from "file-saver";
import './Resume.css'


const Resume = () => {
  const saveFile = () => {
    saveAs(
        resume,
        "Resume.pdf"
    );
  };
  return (
        <div className="container">
            <button  className="my_resume"  onClick={saveFile}>Download My Resume</button>
        </div>
  );
}

export default Resume 