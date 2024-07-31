import React from 'react';
import {BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const technicalSkills = [
  'GitHub', 'Node.js', 'APIs', 'HTTPS', 'REST', 'NPM'
];

const softSkills = [
  'Communication', 'Problem Solving', 'Teamwork', 'Adaptability', 'Creativity'
];

function SkillsPage() {
  return (
    <section id="skills" className="container px-5 py-10 mx-auto">
      <Card className="text-center mb-20">
        <ChipIcon className="chip" />
        <CardHeader>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">Skills & Technologies</h1>
        </CardHeader>
        <CardBody>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I am a Full-Stack Developer with a strong focus on MERN stack technologies (MongoDB, Express.js, React, and Node.js). My technical expertise includes proficiency in JavaScript (ES6+), HTML, CSS, RESTful APIs, and database management with MongoDB and SQL. I am skilled in using tools like Git, GitHub, and AWS for efficient development and deployment. My experience extends to DevOps practices, including CI/CD pipelines. Additionally, I possess strong problem-solving abilities, effective communication skills, and a keen attention to detail, enabling me to collaborate effectively in agile teams.
          </p>
        </CardBody>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-80 mx-auto">
        <Card>
          <div>
            <CardHeader>
              <h2 className="text-2xl font-medium title-font mb-4">Technical Skills</h2>
            </CardHeader>
            <CardBody>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                <BadgeCheckIcon className="text-green-400 flex-shrink-0 mr-4 badge" />
                <p className="text-lg">{skill}</p>
                </div>
              ))}
            </CardBody>
          </div>
        </Card>
        <Card> 
          <CardHeader>
              <h2 className="text-2xl font-medium title-font mb-4">Soft Skills</h2>
          </CardHeader>
          <CardBody>
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center mb-2">
                <BadgeCheckIcon className="text-green-400 flex-shrink-0 mr-4 badge" />
                <p className="text-lg">{skill}</p>
              </div>
            ))}
           </CardBody>
        </Card>
      </div>
    </section >
  );
}

export default SkillsPage;
