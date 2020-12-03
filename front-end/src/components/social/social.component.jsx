import React from 'react';
import { socialLinksContent} from '../../data/nav-barList.json';

import {
  SocialIcons,
  IconLinks 
} from './social.styles';

const SocialLinks = () => {
  return (
    <SocialIcons>
      {
        socialLinksContent.map((element, key) => 
          <IconLinks 
            key={key} 
            href={`${element.linkTo}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className={`${element.icon}`} />
          </IconLinks>
        )
      }
    </SocialIcons>
  )
}

export default SocialLinks;
