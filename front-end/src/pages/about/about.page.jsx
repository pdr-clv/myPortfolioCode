import React, { useEffect } from 'react';

import Accordion from '../../components/accordion/accordion.component';

import { AboutPageStyles, PageContainer, PageContent } from './about.styles';

import InfoTable from '../../components/info-table/info-table.component'


const AboutPage = () => {

  //This is for footer links, if we click on them, automatically will scrollTo top.
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return(
    <AboutPageStyles>
      <PageContainer>
        <h1>About me</h1>
        <PageContent>
          <div>
          <p>Hi! my name is Pedro, I am Spanish full stuck web developer. I was graduated in Physics for the University of Valencia, and now located in Moscow.</p>
          <p>Everytime there are more and more new programming languages, frameworks and new phylophies and procedures to develop.</p>
          <p>It is impossible to find a candidate with all knowledge, fitting perfectly in a position. The caveat is to find a candidate having talent, deep and logical programming knowledge to adap to the job position. It is more important than managing 100 specific technologies, but not beeing able to adapt to new trends and phylosophies.</p>
          <p>For further information, have a look and download <a href="https://res.cloudinary.com/dg5pircnj/image/upload/v1599120818/PortfolioApp/CV-image_ailwfv.jpg">My CV</a></p>
          <p>¡Welcome on board! The trip is just began, Web developing is growing a lot. WebApps are the base for phone and other platform apps. You must be ready to keep on learning new Web features.</p>
          <p>Coding is a challenge ....Coding is my passion ... ;)</p>
          <p>Here it is a short summary about my experience, and how I understand web developing is.</p>
          <Accordion/>
          <h6>Backend</h6>
          <p>From the other hand, to have a frontend career it can be enough for a junior developer, due that it is a matter of fetching data from any API backend to develop the site.</p>
          <p>But I think it is not enough, if you career must grow in web developing. In the past I used PHP + mySQL now I see how that code was not so structured, it was merged frontend + backend together. Nowadays I am more focused in node.js + MongoDB to create an API with the endpoints to request later from the frontend.</p>
          <p>Recently my profile it is also called MERN full stuck (MongoDB + Express + React + Node.js)</p>
          <p>As a good backend developer, it is important to pay special attention on user auth and security anderror handling</p>
          <h6>How I became developer</h6>
          <ul>
            <li><b>My first steps developing:</b> In University I already used software to do researches, but real start was when I worked in automotive Industry. I managed huge data in Excel Worksheets. During this time I developed Windows Apps with Visual Basic and Access using mySQL local databases.</li>
            <li><b>Static web developing:</b> In 2017 I started the basics of FrontEnd. HTML5, CSS3 (responsive, Bootstrap), JS.</li>
            <li><b>Dinamic web developing:</b> To became full stuck developer, I focused more in JS (JQuery ES6), and also backEnd progamming PHP (mySQL CRUD and asynchronous calls with Ajax).</li>
            <li><b>Developing with new frameworks:</b> Use of React.js to develop frontEnd structure, separated and perfectly integrated in the backEnd Node.js + Mongodb and Firebase (REST API).</li>
          </ul>
          <h6>Job Experience before developing</h6>
          <p>I worked in the production and logistics sector</p>
          <p>Due to my scientics degree, I got used easily to manage data, perform reports with those data.</p>
          <p>I was on charge to optimize stocks, to purchase new raw material, to manage operators tasks, find the number of operators,and many tasks.</p>
          <p>Excel became my main tool to develop all these tasks, but thanks to all mess created with many crossed Excel files. I noticed that the solutions should be having data well structured in one single data base</p>
          <p>I worked hard to develop a database for my own deparment, because for whole business was not possible. Company didn't invest on it.</p>
          <p>I did all trainning by myself, and making it possible for two main reasons, for my deparment and for my possible future career in IT.</p>
          </div>
          <div><InfoTable></InfoTable></div>
        </PageContent>
      </PageContainer>
    </AboutPageStyles>
  )};

export default AboutPage;