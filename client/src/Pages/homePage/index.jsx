import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button, CardSubtitle, CardHeader, CardFooter, CardLink, Container } from 'react-bootstrap';
import Links from "../../components/Links";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
  const myPdf = 'client/public/J.Lieberman.pdf';
  const portfolioPic = 'client/public/pic.jpeg';

  return (
    <Container id='about'>
      <Card className="card shadow-sm">

        <CardHeader>
          <img src={portfolioPic} alt="Jaime Nickels" />
          <h1>Are you looking for your next Web developer or Software Engineer?</h1>

          <br />

          <h2>Then you're in the right spot.</h2>
        </CardHeader>

        <Card>
          <CardBody>
            <CardTitle> My name is Jaime Nickels, A passionate Full-Stack Developer with a focus in MERN.</CardTitle>
            
            <br />
            
            <CardText>
              Based in Columbus, Ohio, I am an eager Full-Stack Software Engineer with a focus in MERN. Having just completed my study of full stack web development at Kenzie Academy. Their program allowed us to learn in a project-based environment, providing me not only with the technical skills needed but also many more that are just as crucial. While also giving me hands-on experience with HTML, CSS, JavaScript, and many more. Check out my skills section to see more.
            </CardText>
          </CardBody>
            
            <CardLink className="card-link"><Links /></CardLink>
          <br/>

          <CardFooter>
            <Button variant="primary" href={myPdf} target="_blank" className="button mt-3">Download Resume</Button>
          </CardFooter>

        </Card>
      </Card>
    </Container>
  );
};

export default HomePage;