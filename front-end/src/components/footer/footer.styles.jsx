import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterStyles = styled.footer`
  padding: 5px 0 20px 0;
  background-color: rgba(255,140,0,0.2);
  color: rgb(255,103,0);
`;

export const FooterContainer = styled.div`
  margin: auto;
  text-align: center;
  display:flex;
  width: 70%;
  @media screen and (max-width: 868px) {
    width:80%;
  }
  @media screen and (max-width: 600px) {
    width:95%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width:1600px) {
    width: 85%;
    min-height:15vh;
  }
`;

export const FooterElement = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 10px 0;
    text-decoration: underline;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const LinksFooter = styled.div`
  display:flex;
  flex-direction: column;
`;
export const CopyrightDiv = styled.div`
  font-size: 0.8em;
  margin: 15px 0;
  display:flex;
  width: 100%;
  justify-content: center;
  
  @media screen and (max-width: 670px) {
    font-size: 0.7em;
  }
`;

export const SiteLink = styled(Link)`
  color: rgb(255,103,0);
  font-size: 0.8em;
  padding: 2px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover{
    color: grey;
  }
  @media screen and (max-width: 670px) {
    font-size: 0.7em;
  }
`;