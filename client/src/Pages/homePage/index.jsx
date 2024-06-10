import React from "react";
import { Card, CardBody, CardText, Container, CardTitle, Button } from "react-bootstrap";
import './style.css'


const HomePage = () => {
  const myPdf = 'client/public/resume.pdf'
  const portfolioPic = "client/public/pic.jpeg";

  return (
    <Container id='about' >
      <img
        src={portfolioPic}
      />

      <Card style={{ width: '60rem' }} className="card">
        <CardTitle as="h1">
          <strong>Hi! I'm Jaime Nickels,</strong>
        </CardTitle>
        <CardBody>
          <br />
          <CardText>
            <em>A passionate Full-Stack Developer with a focus in MERN.</em>
          </CardText>
          <br />
          <CardText>
            <em>Are you looking for your next Web developer or Software Engineer? Then you're in the right spot.</em>
          </CardText>
          <br />
          <CardText>
            Based in Columbus,Ohio I am an eager Full-Stack Software Engineer with a focus in MERN. Having Just completed my study of full stack web development at Kenzie Academy. Their program allowed us to learn in a project based environment providing me not only with the technical skills needed but also many more that are just as crucial.  While also Giving me a hands on experience with Html, CSS, JavaScript, and many more. Check out my skills section to see more.
          </CardText>
        </CardBody>

        <br />

        <footer >

          <Button variant="primary" href="#contact" >Contact Me</Button>

          <Button variant="primary" href="#projects"> Past Work </Button>

          <Button variant="primary" href={myPdf} >View Resume</Button>

        </footer>
      </Card>
    </Container>
  )
};

export default HomePage;