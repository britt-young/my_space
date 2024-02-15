import React from 'react'
import './Styles/Quals.css';
import resume from '../assets/resume.pdf';

const Quals = () => {
  return (
    <Section>
      <div>
      <a href="{resume}" download="proposed_file_name">Download</a>
      </div>
    </Section>
  );
}

export default Quals