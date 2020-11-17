import React, {useState} from 'react';

import projectsList from '../../data/projectsList.json';

import ProjectItem from '../../components/project-item/project-item.component';

import {
  ProjectPageContainer,
  ProjectContainer,
  ModalGallery,
  GalleryPicture,
  ProjectsBanner
} from './myprojects.styles';

const MyProjectsPage = () =>{
  const [showModal,setModal] = useState(false);
  const [imgUrlModal,setimgUrl] = useState(''); //for the modal with pictures gallery of application
  return(
  <ProjectPageContainer>
    <ProjectsBanner>
      <h1>What do I do?</h1>
      <p>This is a list of my projects, click on them to view a demo. Projects are ordered by date in descending order. Nowadays I am focused to develop frontend with React, Hooks and styled components for styles.</p>
    </ProjectsBanner>

    <ProjectContainer>
      {
        projectsList.map(project=>
          <ProjectItem 
            key={ project.name.toLowerCase().replace(/\s/g, '') }
            { ...project }
            setModal = { ()=>setModal(true) }
            setimgUrl = { (url) => setimgUrl(url)}
          />
        )
      }
    </ProjectContainer>
    <ModalGallery showModal={showModal}>
      <span onClick = {()=>setModal(false)} >&times;</span>  
      <GalleryPicture imgUrlModal = {imgUrlModal}></GalleryPicture>
    </ModalGallery>
  </ProjectPageContainer>
  );
}

export default MyProjectsPage;