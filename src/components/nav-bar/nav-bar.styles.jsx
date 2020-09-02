import styled, {css}  from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const openclosebtnstyles = css`

display:none;

span{
  border-radius:2px;
  cursor:pointer;
  font-size: 1.4em;
  padding:2px 5px;

  &:hover{
    font-weight:bold;
  }
}

@media screen and (max-width: 768px) {
  display:inline
}

`;

export const NavBarStyled = styled.div`
  z-index: 30; 
  position:fixed;
  width:100%; /* if we want to have navBar fixed on top */
  background-color: rgba(0,0,0,0.6);
  color: white;

  @media screen and (max-width: 768px) {
  background-color:transparent;
  }
`;


export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
  width:95%;

  }
`;

export const LogoContainer = styled.div`
  display:flex;
  @media screen and (max-width: 768px) {
    height:38px;
    width:90%;
    justify-content:space-between;
  }

`;

export const OpenBtn = styled.div`
  ${openclosebtnstyles}
  line-height:50px;
  span{
    background:rgba(256,256,256,0.5);
    margin-left:10px;
    margin-top:auto;
    
  }
`;

export const CloseBtn = styled.div`
  ${openclosebtnstyles}
  line-height:38px;
  span{
    float:right;
    margin-right:15px;
    font-size: 2em;
  }
`;

export const Logo = styled.div`
  color:orange;
  text-align:center;
  font-size:1em;
  margin:auto 0;
  font-weight: bold;
  align-items: center;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const MenuLinksContainer = styled.div`  
  display:inline;
`;
const selected = css`
  background-color: rgba(256, 256, 256, 0.45);
  font-weight: bold;
  text-decoration:underline;
`;

export const MenuLinks = styled.div`

  letter-spacing:-1px;
  text-transform:uppercase;
  display: flex;

  @media screen and (max-width: 768px) {
  overflow-y:scroll;
  background-color: orange;
  color: black;
  top:0;
  left: ${({ showNav }) => showNav ? '0' : '-50%'};
  position:fixed;
  flex-direction: column;
  width:50%;
  height:100vh;
  transition: left 0.4s linear;
  ::-webkit-scrollbar{
      width:0;
    }
  }
  @media screen and (max-width: 425px) {
    left: ${({ showNav }) => showNav ? '0' : '-80%'};
    width:80%;
  }
  .a{
  color: black;
  font-size: 0.8em;
  text-align: center;
  padding: 14px;
  text-decoration: none;

  &:hover{
    ${selected}
  }

  @media screen and (max-width: 768px) {
    border-bottom:1px solid black;
  }
  }
`;

export const MenuLinksBackground = styled.div`
  display:${({ showNav }) => showNav ? 'inline' : 'none'};
  
  @media screen and (max-width: 768px) {
    /*display:inline;*/
    width:50%;
    height:100vh;
    background-color:rgba(0,0,0,0.7);
    top:0;
    left:50%;
    opacity: ${({ showNav }) => showNav ? '1' : '0'};
    position:fixed;
    transition: opacity 0.3s linear;
  }
  @media screen and (max-width: 425px) {
    width:20%;
    left:80%;
  }


`;





export const LinkNav = styled(Link)`

  
  color: white;
  font-size: 0.8em;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover{
    ${selected}
  }
  .active{
    font-weight:bold;
  }

  @media screen and (max-width: 768px) {
    color: black;
  }
`;



