import React from 'react';
import { navBarContent } from '../../data/nav-barList.json.js';
import SocialLinks from '../social/social.component';

import { 
  FooterStyles, 
  FooterElement,
  LinksFooter,
  FooterContainer,
  CopyrightDiv, 
  SiteLink 
} from './footer.styles';

const FooterComponent = () => {
  return (
    <FooterStyles>
      <FooterContainer>
        <FooterElement>
          <LinksFooter>
            <h4><i className="fas fa-chalkboard"></i> NAVIGATE</h4>
            {
              navBarContent.map((element,key) => 
                <SiteLink key={key} to = {`${element.linkTo}`}>
                  {element.name}
                </SiteLink>
              )
            }
          </LinksFooter>
        </FooterElement>
        <FooterElement>
          <h4>FOLLOW ME </h4>
          <SocialLinks />
        </FooterElement>
      </FooterContainer>
      <CopyrightDiv>© 2020 Copyright: Pedro Portfolio</CopyrightDiv>
    </FooterStyles>
  )
}

export default FooterComponent;
