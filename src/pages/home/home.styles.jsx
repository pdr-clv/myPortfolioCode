import styled  from 'styled-components';

export const MainPageStyles = styled.div`
  min-height:100vh;
  background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1597479070/PortfolioApp/image-background_s40pq4.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  display:flex;
  flex-direction:column; 

`;

export const PageContainer = styled.div`
  margin:auto;
  display:flex;
  flex-direction:column;
`;

export const Title=styled.div`
  margin-bottom:65px;
  h1{
    margin:0;
    text-align:center;
    font-size:2.5em;
  }

  span{
    color:orange;
  }

  @media screen and (max-width: 768px) {
    margin-bottom:50px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom:20px;
    h1{
      font-size:1.9em;
    }
  }
  @media screen and (max-width: 390px) {
    margin-bottom:10px;
    h1{
      font-size:1.4em;
    }
  }

`;

export const Content=styled.div`
  max-width:1200px;
  margin: 0 auto;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  @media screen and (max-width: 768px) {
    margin-bottom:50px;
  }

  @media screen and (max-width: 540px) {
    flex-direction:column-reverse;
    flex-wrap:unset;
    margin-bottom:20px;
    h1{
      font-size:1.9em;
    }
  }
  @media screen and (max-width: 390px) {
    margin-bottom:10px;
    h1{
      font-size:1.4em;
    }
  }
`;

export const Photo=styled.div`
  padding:30px;
  display:flex;
  justify-content:center;
  align-items:center;

  div{
  border-radius:50%;
  border:3px solid orange;
  height:200px;
  width:200px;
  background-image: url('https://res.cloudinary.com/dg5pircnj/image/upload/v1597479069/PortfolioApp/profile-picture_wneqqc.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  }
  @media screen and (max-width: 768px) {
    justify-content:flex-end;
    div{
      height:150px;
      width:150px;
    }
  }
  @media screen and (max-width: 540px) {
    justify-content:center;
    div{
    }
  }

  
`;

export const Description=styled.div`
  font-size:1.2em;
  padding:30px;
  text-align:left;
  h2{
    text-transform: uppercase;
  }

  p{
    width:90%;
  }
  @media screen and (max-width: 768px) {
    text-align:center;
    font-size:1.2em;
    padding:20px;
    font-size:0.9em;
    p{
    width:100%;
  }
  }
`;

export const SocialLinks = styled.div`
  div   {
    width:60%;
    margin: auto;
    display:flex;
    justify-content: space-around;

    a {
      font-size: 2em;
      color: rgb(100,100,100);
    }

    a:hover {
      color: orange;
    }

    @media screen and (max-width: 425px) {
      width:95%;
    }
  }


`;
