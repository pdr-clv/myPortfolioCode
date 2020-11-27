import React, { useEffect } from 'react';

import {AboutPageStyles,PageContainer} from './about.styles';


const AboutPage = () => {

  //This is for footer links, if we click on them, automatically will scrollTo top.
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  return(
    <AboutPageStyles>
      <PageContainer>
      <h1>About me</h1>
      <p>Hi! my name is Pedro, I am Spanish full stuck web developer. I was graduated in Physics for the University of Valencia, and now located in Moscow . Here is my story about how I became developer.</p>
      <ul>
        <li><b>My first steps developing:</b> In University I already used software to do researches, but real start was when I worked in automotive Industry. I managed huge data in Excel Worksheets. During this time I developed Windows Apps with Visual Basic and Access using mySQL local databases.</li>
        <li><b>Static web developing:</b> In 2017 I started the basics of FrontEnd. HTML5, CSS3 (responsive, Bootstrap), JS.</li>
        <li><b>Dinamic web developing:</b> To became full stuck developer, I focused more in JS (JQuery ES6), and also backEnd progamming PHP (mySQL CRUD and asynchronous calls with Ajax).</li>
        <li><b>Developing with new frameworks:</b> Use of React.js to develop frontEnd structure, separated and perfectly integrated in the backEnd Node.js + Mongodb and Firebase (REST API).</li>
      </ul>
      <p>For further information, have a look and download <a href="https://res.cloudinary.com/dg5pircnj/image/upload/v1599120818/PortfolioApp/CV-image_ailwfv.jpg">My CV</a></p>
      <p>¡Welcome on board! The trip is just began, Web developing is growing a lot. WebApps are the base for phone and other platform apps. You must be ready to keep on learning new Web features.</p>
      <p>Coding is a challenge ....Coding is my passion ... ;)</p>
      </PageContainer>
    </AboutPageStyles>
  )};

export default AboutPage;