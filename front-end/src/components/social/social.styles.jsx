import styled  from 'styled-components';

export const SocialIcons = styled.div`
  width:85%;
  margin: auto;
  display:flex;
  justify-content: space-around;

  a {
    font-size: 1.8em;
    color: rgb(255,103,0);
    
    @media screen and (max-width: 670px) {
      font-size: 1.5em;
    }
  }

  a:hover {
    color: grey;
  }

  @media screen and (max-width: 425px) {
    width:95%;
  }
`;
