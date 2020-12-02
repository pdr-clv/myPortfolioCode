import React, { useEffect } from 'react';

import Accordion from '../../components/accordion/accordion.component';

import { AboutPageStyles, PageContainer, PageContent, AboutText, AboutTable } from './about.styles';

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
          <AboutText>
          <div>
            <p>Hi! my name is Pedro, I am Spanish full stuck web developer. I was graduated in Physics for the University of Valencia, and now located in Moscow.</p>
            <p>Everytime there are more and more new programming languages, frameworks and new phylophies and procedures to develop.</p>
            <p>It is impossible to find a candidate with all knowledge, fitting perfectly in a position. The caveat is to find a candidate having talent, deep and logical programming knowledge to adap to the job position. It is more important than managing 100 specific technologies, but not beeing able to adapt to new trends and phylosophies.</p>
            <p>For further information, have a look and download <a href="https://res.cloudinary.com/dg5pircnj/image/upload/v1599120818/PortfolioApp/CV-image_ailwfv.jpg">My CV</a></p>
            <p>¡Welcome on board! The trip is just began, Web developing is growing a lot. WebApps are the base for phone and other platform apps. You must be ready to keep on learning new Web features.</p>
            <p>Coding is a challenge ....Coding is my passion ... ;)</p>
            <p>Here it is a short summary about my experience, and how I understand web developing is.</p>
          </div>
          </AboutText>
          <AboutTable><InfoTable></InfoTable></AboutTable>
        </PageContent>
        <Accordion/>
      </PageContainer>
    </AboutPageStyles>
  )};

export default AboutPage;