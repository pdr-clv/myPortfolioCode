import React from 'react';
import { socialLinksContent } from '../../data/nav-barList.json';

import {
  SocialIcons, 
} from './social.styles';

const SocialLinks = () => {
  return (
    <SocialIcons>
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
    </SocialIcons>
  )
}

export default SocialLinks;
