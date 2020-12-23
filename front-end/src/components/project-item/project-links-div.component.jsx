import React from 'react';
import {
  ProjectLinksDiv
} from './project-item.styles';

const ProjectLinks = (props) => {
  
  const {setModal, setimgUrl } = props;
  let { projectLinks } = props;
  if (!projectLinks) {
    projectLinks = {};
  }

  const ProjectLinksReturn = <ProjectLinksDiv>
    {
      Object.keys(projectLinks).map(key => {
        if (key === 'webLink') {
          return <a 
              href={projectLinks[key] } 
              key = { key }
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className="fas fa-link"></i> Demo
            </a>
        } if (key === 'picGallery') {
          return <span 
            key = {key}
            onClick={()=>{
            setModal();
            setimgUrl(`${projectLinks[key]}`)
            }
          }><i className="far fa-images"></i> Pics</span>
        }
        return <a 
          href={projectLinks[key]} 
          key={key} 
          target='_blank'
          rel='noopener noreferrer'
        ><i className="fab fa-github"></i> Code</a>;
      })      
    }
  </ProjectLinksDiv>

  return ProjectLinksReturn;

};

export default ProjectLinks;