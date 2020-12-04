import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../../components/accordion/accordion.component';

import { AboutPageStyles, PageContainer, PageContent, AboutText, AboutTable, LinkCV } from './about.styles';

import InfoTable from '../../components/info-table/info-table.component';




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
              <h4><b>Welcome on board!</b></h4>
              <p>Hi! my name is Pedro, I am Spanish full stuck web developer. In the side table you can find brief details about me. </p>
              <LinkCV><a href="https://res.cloudinary.com/dg5pircnj/image/upload/v1599120818/PortfolioApp/CV-image_ailwfv.jpg">More personal information in My CV</a></LinkCV>
              <p>My education is in Physics (University of Valencia 2000). Physics degree is very strict in maths, this fact helped me now to analize data very fast and logical</p>
              <p>In 2005 I studied an MBA in Logistics. My main job experience is based on logistics, I have a very good understanding of real logistics and business problems solving.</p>
              <p>Recently, specially because I changed my residence, and also because I always loved to develop simple software for business solutions, I changed my career into web developing.</p>
              <p>In web developing nowadays there are many technologies software, frameworks and programming procedures. I am developing frontend with react and backend with node.js + mongodb</p> 
              <p>Also you can check all my software skills in <Link to='/skills'>myskills</Link></p>
              <p>The trip is just began, web developing is the future and keeps growing more and more.<b> Coding is a challenge .... Coding is my passion ...</b></p>
              <p>Click in the following tabs to read more detailed information about me.</p>
            </div>
          </AboutText>
          <AboutTable>
            <InfoTable />
          </AboutTable>
        </PageContent>
        <Accordion/>
      </PageContainer>
    </AboutPageStyles>
  )};

export default AboutPage;