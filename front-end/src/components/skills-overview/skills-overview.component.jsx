import React from 'react';

import SkillItem from '../skill-item/skill-item.component';


import { 
  SkillsBlock,
  SkillTitle
  } from './skills-overview.styles';

const SkillsOverview = (props) =>{
  const { name, skills } = props;
  return (
    <div>
      <SkillTitle>{name.toUpperCase()}</SkillTitle>
      <SkillsBlock>
      {
        skills.map(element=> <SkillItem 
          key={element.name.toLowerCase().replace(/\s/g, '')}
          { ...element }
        />)
      }
      </SkillsBlock>
    </div>
  );
};

export default SkillsOverview;