import styled from 'styled-components';

export const PageContainer = styled.div`
  text-align: justify;
  background-color:rgba(256,256,256,0.1);
  width:70%;
  margin: 55px auto;
  min-height: 100vh;
  
  h1, h4, p{
    text-align: center;
    color: orange;
  }
  p {
    color: rgba(256,256,256,0.8);
    font-size: 0.8em;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    width: 96%;
  }

  @media screen and (min-width: 1600px) {
    min-height: 85vh;
    width: 85%;
  }
`;

export const ContactStyles = styled.div`
  font-size:1em;
  min-height:550px;
  max-width: 1200px;
  margin: auto;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SocialContainer = styled.div`
  width: 50%;
  margin: 30px auto;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;