import styled  from 'styled-components';

export const AboutPageStyles = styled.div`
  padding: 40px 0;
  min-height:100vh;
  background-color: black;
  background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1597479070/PortfolioApp/cover-picture_tp3d0m.jpg');
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto 1200px; /* Resize the background image to cover the entire container */
  display:flex;
  justify-content: flex-end;
  align-items:center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    background-image: unset;
  }

  @media screen and (min-width: 1600px) {
    min-height: 85vh;
    background-size: auto 1400px;
  }

  @media screen and (min-width: 1800px) {
    background-size: auto 1600px;
  }

  @media screen and (min-width: 2000px) {
    background-size: auto 1800px;
  }

  @media screen and (min-width: 2400px) {
    min-height: 85vh;
    background-size: auto 2200px;
  }

`;

export const PageContainer = styled.div`
  text-align: justify;
  margin-right:30px;
  background-color:rgba(256,256,256,0.1);
  width:70%;
  h1{
    text-align: center;
    color: orange;
  }

  @media screen and (max-width: 1220px) {
    margin-right: 0;
    width:90%;
    margin: auto;
  }
  @media screen and (max-width: 720px) {
    width:96%;
  }

  @media screen and (min-width: 1600px) {
    width: 70%;
    margin-right: 60px;
    margin-top: 60px;
  }

  @media screen and (min-width: 2000px) {
    width: 60%;
    margin-right: 90px;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    color: orange;
    font-size: 0.9em;

    :hover {
      color:rgb(255,103,0);
    }
  }

  p,h4 {
    width:95%;
    margin:auto;
    margin-bottom:10px;

  }

  @media screen and (max-width: 599px) {
    flex-direction:column-reverse;
    p,h4 {
      width: 98%;
    }
  }
`;

export const AboutText = styled.div`
  display:flex;
  align-items: center;
  width: 69%;
  @media screen and (max-width: 950px) {
    width: 59%;
  }
  @media screen and (max-width: 677px) {
    width: 54%;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

export const AboutTable = styled.div`
  width: 29%;
  @media screen and (max-width: 950px) {
    width: 39%;
  }
  @media screen and (max-width: 677px) {
    width: 44%;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

export const LinkCV = styled.div`
  display:block;
  text-align: center;
  padding: 25px;

  a{
    padding: 15px;
    background-color:orange;
    color:white;
    text-decoration:none;
    border-radius: 5px;
    @media screen and (max-width: 630px) {
      padding: 10px;
    }
    :hover {
      background-color:rgb(255,103,0);
      color:white;
    }

  }
`;