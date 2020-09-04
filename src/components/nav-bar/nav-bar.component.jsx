import React,{ useState} from 'react';

//import navBarContent from './nav-bar-data';
import navBarContent from '../../data/nav-barList.json.js';

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
          <Logo><i className="fas fa-chalkboard"></i> My PortFolio</Logo>
        </LogoContainer>
        <MenuLinksContainer>
          <MenuLinks showNav={showNav}>
            <CloseBtn onClick={()=>setShowNav(!showNav)}>
              <span>&times;</span>
            </CloseBtn>
            {
              navBarContent.map((element,key) => <LinkNav 
                smooth 
                to = {`#${element.linkTo}`}
                onClick={()=>setShowNav(!showNav)}
                key = {key}>
                  {element.name}
                </LinkNav>)
            }
          </MenuLinks>
          <MenuLinksBackground showNav={showNav} 
          onClick={()=>setShowNav(false)}/> 
        </MenuLinksContainer>
      </NavContainer>
    </NavBarStyled>
  );
}
export default NavBar;
