import React, {useState} from 'react';

import projectsList from '../../data/projectsList.json';

import ProjectItem from '../../components/project-item/project-item.component';

import {
  ProjectPageContainer,
  ProjectContainer,
  Title,
  ModalGallery,
  GalleryPicture
} from './myprojects.styles';

const MyProjectsPage = () =>{
  const [showModal,setModal] = useState(false);
  const [imgUrlModal,setimgUrl] = useState(''); //for the modal with pictures gallery of application
  return(
  <ProjectPageContainer>
    <Title>My projects</Title>
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