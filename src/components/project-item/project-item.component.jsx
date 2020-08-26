import React, {useState} from 'react';
import slugify from 'react-slugify';

import Badge from '../badge/badge.component';

import {
  ProjectItemStyled,
  ProjectImg,
  ProjectText,
  BadgeWrap,
  Description,
  ProyectsLinksDiv
} from './project-item.styles';

const ProjectItem = (props) =>{
  //check in Description div is overfloaded
  const [overFloaded, setOverFload] = useState(false);
  //Description div full Height if you want to read all content of div because is overfloaded
  const [fullHeightDescription, setFullHeight] = useState(false);
  const {name,imgUrl,description,appLink,gitHubLink}=props;
  let { skills }= props;
  if (!skills) {
    skills = [];
  };
  return (<ProjectItemStyled>
  <ProjectImg imgUrl={imgUrl}/>
  <ProjectText>
    <h4>{name.toUpperCase()}</h4>
    <Description
      style = {{width:"97%"}}
      overFloaded = {overFloaded}
      fullHeightDescription= {fullHeightDescription}
      onChange = {()=>setOverFload(!overFloaded)}>
      {description}
      <span 
        onClick = {()=>setFullHeight(true)}
      >More...</span>
    </Description>
    <ProyectsLinksDiv>
      <a href={appLink}>View sample</a>
      <a href={gitHubLink}>github Code</a>
    </ProyectsLinksDiv>
    <BadgeWrap>
      {skills.map(skillElement => 
        <Badge 
        key = {`${slugify(skillElement)}`}
        badgeText={skillElement.toUpperCase()} />)
      } 
    </BadgeWrap>
  </ProjectText>
</ProjectItemStyled>)};

export default ProjectItem;