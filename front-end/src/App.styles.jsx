import styled  from 'styled-components';


export const AppStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  color:white;
  font-size:16px;
  background:rgb(20,20,20);
  font-family:Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  h1,h2,h3,h4,h5,h6 {
  text-transform: uppercase;
  }

  p {
    margin-bottom:5px;
  }

  @media screen and (max-width: 500px) {
    font-size:14px;
  }

  @media screen and (max-width: 320px) {
    font-size:12px;
  }
`;

