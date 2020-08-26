import React from 'react';
import SkillsOverview from '../../components/skills-overview/skills-overview.component';
import skillsList from '../../data/skillsList.json';

import { SkillsPageStyles,
  PageContainer
  } from './skills.styles';

const SkillsPage = () => {
  return(
    <SkillsPageStyles>
      <PageContainer>
        <h1>SKILLS</h1>
        {
          skillsList.map(skillsElement => 
            <SkillsOverview 
              key={skillsElement.name.toLowerCase().replace(/\s/g, '')} 
              {...skillsElement} 
            />
          )
        }
      </PageContainer>
    </SkillsPageStyles>
)};

export default SkillsPage;