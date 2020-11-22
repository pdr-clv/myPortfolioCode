import React from 'react';

import { MainPageStyles,
  Title,
  Content,
  Photo,
  Description,
  PageContainer
} from './home.styles';

const HomePage = () => {
  return(
    <MainPageStyles>
      <PageContainer>
        <Title><h1>Pedro <span>Calvo Herranz</span></h1></Title>
        <Content>
          <Description>
            <h2>Welcome to my Portfolio</h2>
            <p>Hello, my name is Pedro. I am full stuck developer. Feel free to know more about me. </p>
          </Description>
          <Photo>
            <div></div>
          </Photo>
        </Content>

      </PageContainer>
    </MainPageStyles>
)};

export default HomePage;