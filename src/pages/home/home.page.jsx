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
        <Title><h1>Pedro <span>Calvo Herranz</span></h1></Title>
        <Content>
          <Description>
            <h2>Welcome to my Portfolio</h2>
            <p>Hello, my name is Pedro. I am full stuck developer. Feel free to know more about me. </p>
            <SocialLinks>
              <div>
                <a href='https://www.linkedin.com/in/pedro-calvo-herranz-56561315a/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/pdr-clv'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href='https://twitter.com/Pedroclvo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href='https://www.facebook.com/pedro.calvoherranz'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href='https://www.instagram.com/pdr.clv/?hl=es'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className="fab fa-instagram"></i>
                </a>
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