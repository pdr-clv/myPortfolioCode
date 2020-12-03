import styled  from 'styled-components';

export const AboutPageStyles = styled.div`
  padding: 40px 0;
  min-height:100vh;
  background-color: black;
  background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1597479070/PortfolioApp/cover-picture_tp3d0m.jpg');
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto; /* Resize the background image to cover the entire container */
  display:flex;
  justify-content: flex-end;
  align-items:center;
  @media screen and (max-width: 768px) {
    justify-content: center;
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

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width:90%;
    margin: auto;
  }
  @media screen and (max-width: 720px) {
    width:96%;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  ul{
    margin-right:20px;
  }

  p {
    width:95%;
    margin:auto;
    margin-bottom:10px;

  }
  @media screen and (max-width: 572px) {
    flex-direction:column-reverse;
  }
`;

export const AboutText = styled.div`
  display:flex;
  align-items: center;
  width: 69%;
  @media screen and (max-width: 800px) {
    width: 59%;
  }
  @media screen and (max-width: 572px) {
    width: 100%;
  }
`;

export const AboutTable = styled.div`
  width: 29%;
  @media screen and (max-width: 800px) {
    width: 39%;
  }
  @media screen and (max-width: 572px) {
    width: 100%;
  }
`;