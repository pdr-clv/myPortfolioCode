import React from 'react';

import Badge from '../badge/badge.component';

import {
  Skill,
  SkillIcon,
  SubSkill
} from './skill-item.styles';

const SkillItem = (props) => {
  const { iconFontawesome, name} = props;
  let {subSkills} = props;
  if (!subSkills) {
    subSkills=[];
  }
  if (iconFontawesome) {
    return(
      <Skill 
        key={name.toLowerCase().replace(/\s/g, '')}
        >
        <SkillIcon 
          className={iconFontawesome} key={name.toLowerCase().replace(/\s/g, '')} 
        />
        <SubSkill>
          {
            subSkills.map(subElement => 
              <Badge 
                key={subElement.toLowerCase().replace(/\s/g, '')}
                badgeText = {subElement} 
              />
            )
          }
        </SubSkill>
      </Skill>
    )
  }
  return(<Skill key={name.toLowerCase().replace(/\s/g, '')}>
  <SkillIcon key={name.toLowerCase().replace(/\s/g, '')}>
    {name}
  </SkillIcon>
    <SubSkill>
      {
        subSkills.map(subElement => 
          <Badge 
            key={subElement.toLowerCase().replace(/\s/g, '')}
            badgeText = {subElement} 
          />
        )
      }
    </SubSkill>
  </Skill>);
};

export default SkillItem;