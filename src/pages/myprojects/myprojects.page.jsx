import React from 'react';

import projectsList from '../../data/projectsList.json';

import ProjectItem from '../../components/project-item/project-item.component';

import {
  ProjectContainer,
  Title
} from './myprojects.styles';

const MyProjectsPage = () =>{
  return(
  <div>
    <Title>My projects</Title>
    <ProjectContainer>
      {
        projectsList.map(project=>
          <ProjectItem 
            key={ project.name.toLowerCase().replace(/\s/g, '') }
            { ...project }
          />
        )
      }
    </ProjectContainer>
  </div>
  );
}

export default MyProjectsPage;