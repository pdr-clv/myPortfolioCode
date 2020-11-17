import React from 'react';
import { navBarContent, socialLinksContent } from '../../data/nav-barList.json.js';

import { 
  FooterStyles, 
  FooterElement, 
  SocialLinks, 
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
          <SocialLinks>
            {
              socialLinksContent.map((element, key) => 
                <a 
                  key={key} 
                  href={`${element.linkTo}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className={`${element.icon}`} />
                </a>
              )
            }
          </SocialLinks>
        </FooterElement>
      </FooterContainer>
      <CopyrightDiv>© 2020 Copyright: Pedro Portfolio</CopyrightDiv>
    </FooterStyles>
  )
}

export default FooterComponent;
