import React,{ useState} from 'react';

//import navBarContent from './nav-bar-data';

import { 
  NavBarStyled,
  NavContainer,
  LogoContainer,
  OpenBtn,
  Logo,
  MenuLinksContainer,
  MenuLinks,
  CloseBtn,
  MenuLinksBackground,
  LinkNav
  } from './nav-bar.styles';


const NavBar = () =>{
  const [showNav,setShowNav]=useState(false);
  return (
    <NavBarStyled>
      <NavContainer>
        <LogoContainer>
          <OpenBtn onClick={()=>setShowNav(!showNav)}>
            <span>&#9776;</span>
          </OpenBtn>
          <Logo>My PortFolio</Logo>
        </LogoContainer>
        <MenuLinksContainer>
          <MenuLinks showNav={showNav}>
            <CloseBtn onClick={()=>setShowNav(!showNav)}>
              <span>&times;</span>
            </CloseBtn>
            <LinkNav smooth
              to='#main'
              onClick={()=>setShowNav(false)}
              >Home</LinkNav>
            <LinkNav smooth 
              to='#about'
              onClick={()=>setShowNav(false)}>About</LinkNav>
            <LinkNav smooth 
              to='#skills'
              onClick={()=>setShowNav(false)}>Skills</LinkNav>
            <LinkNav smooth 
              to='#myprojects'
              onClick={()=>setShowNav(false)}>My Projects</LinkNav>
          </MenuLinks>
          <MenuLinksBackground showNav={showNav} 
          onClick={()=>setShowNav(false)}/> 
        </MenuLinksContainer>
      </NavContainer>
    </NavBarStyled>
  );
}
export default NavBar;
