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
            <p><b>¡Welcome on board!</b></p>
            <p>Hi! my name is Pedro, I am Spanish full stuck web developer. In the side table you can find brief details about me. </p>
            <p>In my CV there is more extended information about me.</p>
            <a href="https://res.cloudinary.com/dg5pircnj/image/upload/v1599120818/PortfolioApp/CV-image_ailwfv.jpg">My CV</a>
            <p>My degree in University is in Physics (2000). My education was strict in maths, this helps me now to analize data very fast and logical</p>
            <p>In 2005 I studied an MBA in Logistics. My job experience is based on logistics, I have a very good understanding of real logistics and business problems solving.</p>
            <p>Recently, specially because I changed my residence, and also because I always loved to develop simple software for business solutions, I changed my career into web developing.</p>
            <p>In web developing nowadays there are many technologies software, frameworks and programming procedures. I am developing frontend with react and backend with node.js + mongodb</p> 
            <p>You can find all my software skills in <a href="#">myskills</a> and also, I will describe with more details in the following tabs.</p>
            <p>The trip is just began, web developing is the future and keeps growing more and more.<b>Coding is a challenge ....Coding is my passion ... ;)</b></p>
            {/*<p>I enjoyed creating simple databases and well linked Excel files in order to create the best team decissions according the logistics data.</p>
            <p>In recent times, thanks to my mathematical education, and experience in logistics, I am adapting very fast in the world of web developing.</p>
            <p>My job phylosophy was always to create strong procedures, with good data backup, with Excel files</p>
            <p>It is impossible to find a candidate with all knowledge, fitting perfectly in a position. The caveat is to find a candidate having talent, deep and logical programming knowledge to adap to the job position. It is more important than managing 100 specific technologies, but not beeing able to adapt to new trends and phylosophies.</p>
            <p>For further information, have a look and download </p>*/}
            </div>
          </AboutText>
          <AboutTable><InfoTable></InfoTable></AboutTable>
        </PageContent>
        <Accordion/>
      </PageContainer>
    </AboutPageStyles>
  )};

export default AboutPage;