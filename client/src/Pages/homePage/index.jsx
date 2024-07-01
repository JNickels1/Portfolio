import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'react-bootstrap';
import Links from "../../components/Links";
import './style.css';

const HomePage = () => {
  const myPdf = 'client/public/resume.pdf';
  const portfolioPic = 'client/public/pic.jpeg';

  return (
    <div id="about">
      <img src={portfolioPic} alt="Jaime Nickels" />
      <Card className="card shadow-sm">
        <CardBody>
          <CardTitle as="h1">
            <strong>Hi! I'm Jaime Nickels,</strong>
          </CardTitle>
          <CardText>
            <em>A passionate Full-Stack Developer with a focus in MERN.</em>
          </CardText>
          <CardText>
            <em>Are you looking for your next Web developer or Software Engineer? Then you're in the right spot.</em>
          </CardText>
          <CardText>
            Based in Columbus, Ohio, I am an eager Full-Stack Software Engineer with a focus in MERN. Having just completed my study of full stack web development at Kenzie Academy. Their program allowed us to learn in a project-based environment, providing me not only with the technical skills needed but also many more that are just as crucial. While also giving me hands-on experience with HTML, CSS, JavaScript, and many more. Check out my skills section to see more.
          </CardText>
          <Links />
          <Button variant="primary" href={myPdf} target="_blank" className="button mt-3">
            Download Resume
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;