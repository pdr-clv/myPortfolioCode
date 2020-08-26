import React from 'react';

import { AboutPageStyles,
  PageContainer
  } from './about.styles';

const AboutPage = () => {
  return(
    <AboutPageStyles>
      <PageContainer>
      <h1>About me</h1>
      <p>Hi! my name is Pedro. I am full stuck web developer. Here is my story about how I became developer.</p>
      <p><b><i className="far fa-circle"></i> My first steps developing:</b>  More than 10 years in automotive Industry, managing many data in Excel Worksheets. During this time I developed Windows Apps with Visual Basic and Access using mySQL local databases. Projects samples: PRODUCTION STUDY and RECYCLE V1</p>
      <p><b><i className="far fa-circle"></i> Static web developing:</b> In 2017 I started the basics of FrontEnd. HTML5, CSS3 (responsive, Bootstrap), JS. Project samples VETERYNARY WEB and LANGUAGE SCHOOL</p>
      <p><b><i className="far fa-circle"></i> Dinamic web developing:</b> To became full stuck developer, I focused more in JS (JQuery ES6), and also backEnd progamming PHP (mySQL CRUD and asynchronous calls with Ajax). Project sample: RECICLAJES V2</p>
      <p><b><i className="far fa-circle"></i> Developing with new frameworks:</b> I am using React.js to develop frontEnd structure, separated and perfectly integrated in the backEnd Node.js + Mongodb and Firebase (REST API). Project sample: CROWN CLOTHING and MEMORY GAME</p>
      <p>This trip is just began, Web developing is growing a lot. WebApps are the base to create common applications for web, phones and other platforms. You must be ready to keep on learning new Web features.</p>
      <p>Conding is a challenge ....Coding is my passion ... ;)</p>
      </PageContainer>
    </AboutPageStyles>
)};

export default AboutPage;