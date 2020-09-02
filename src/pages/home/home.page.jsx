import React from 'react';

import { MainPageStyles,
  Title,
  Content,
  Photo,
  Description,
  PageContainer,
  SocialLinks } from './home.styles';

const HomePage = () => {
  return(
    <MainPageStyles>
      <PageContainer>
        <Title><h1>Welcome to my Portfolio</h1></Title>
        <Content>
          <Description>
            <h1>Pedro <span>Calvo Herranz</span></h1>
            <p>Hello, my name is Pedro. I am full stuck developer. Feel free to know more about me. </p>
            <SocialLinks>
              <div>
              <a href='https://www.linkedin.com/in/pedro-calvo-herranz-56561315a/'><i className="fab fa-linkedin"></i></a>
              <a href='https://github.com/pdr-clv'><i className="fab fa-github"></i></a>
              <a href='https://twitter.com/Pedroclvo'><i className="fab fa-twitter-square"></i></a>
              <a href='https://www.facebook.com/pedro.calvoherranz'><i className="fab fa-facebook-square"></i></a>
              <a href='https://www.instagram.com/pdr.clv/?hl=es'><i className="fab fa-instagram"></i></a>
              </div>
            </SocialLinks>
          </Description>
          <Photo>
            <div></div>
          </Photo>
        </Content>

      </PageContainer>
    </MainPageStyles>
)};

export default HomePage;