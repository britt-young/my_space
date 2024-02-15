import React from 'react'
import './Styles/Quals.css';
import resume from '../assets/resume.pdf';
import Button from 'react-bootstrap/Button'

const Quals = () => {
  return (
    <main>
        <section id="resume">
            <h1>Front-end Proficiencies</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Response Design</li>
            <li>React</li>
            <li>Bootstrap</li>

            <h1>Back-end Proficiencies</h1>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </section>
        <Button>Download my <a href={resume} download>resume</a></Button>
    </main>
);
}

export default Quals