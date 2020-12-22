import React, { useState } from 'react';
import {
	 Button,
	 Fade,
	 Row,
	 Col,
	 Container
} from 'react-bootstrap';
import ResumeImage from '../../imgs/ResumeImage.png';
import './resume.css';



const Resume = () => {

	const [open, setOpen] = useState(false);

  return (
  	
	<>

	<Container className='center-container'>
	<Row>
		<Col></Col>

		<Col xs={9}>
			<div class='center' >
			<p class='instruction'> Click on the button bellow to display my resume and a link to a printable document.</p>
			<Button className='press'
        onClick={() => setOpen(!open)}
        aria-controls="fade-text"
        aria-expanded={open}>

        SHOW RESUME
      </Button>
	  </div>
      <Fade in={open}>

        <div id="fade-text">
          		
				<div class='res-container'>
				<a class='res-link' href='https://docs.google.com/document/d/1VMb4Gk4jIwBB9za0sLI1NAx27VqSf2LIRyj9jWbB3OE/edit?usp=sharing'> here is a link to my Resume google doc.</a>
				</div>
				<br/>
                <img class='image' src={ResumeImage} alt="pdf of Angel Rene Meillon's resume." />
        </div>
        </Fade>
		
		</Col>

		<Col></Col>
	</Row>
	</Container>
	
    

    </>
  );
}
			


export default Resume;