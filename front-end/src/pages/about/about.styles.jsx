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

  @media screen and (max-width: 768px) {
    margin-right: 0;
    font-size:0.9em;
    width:90%;
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

    a {
      border-radius:4px;
      background-color:orange;
      color:black;
      padding: 2px;
      text-decoration: none;

      &:hover{
        background-color:black;
        color:orange;
      }
    }
  }
`;