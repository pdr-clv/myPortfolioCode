import styled  from 'styled-components';

export const ProjectPageContainer =styled.div`
`;

export const Title = styled.h1`
  padding:50px 0 0 0;
  text-align:center;
  color: orange;
`;

export const ProjectContainer = styled.div`
  font-size:1em;
  min-height:550px;
  max-width: 1200px;
  margin: auto;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;

`;

export const ModalGallery = styled.div`
  position: fixed; /* Stay in place */
  z-index: 60; /* Sit on top */
  padding-top: 50px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.85); /* Black w/ opacity */
  display: ${({ showModal }) => showModal ? 'block' : 'none'};
  animation-name: zoom;
  animation-duration: 0.6s;
  
  span {
    position: absolute;
    top: 10px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  @keyframes zoom {
  from {transform: scale(0.1)} 
  to {transform: scale(1)}
}

`;

export const GalleryPicture = styled.img`
  margin: auto;
  display:block;
  width:auto;
  max-width: 95%;
  content:${({ imgUrlModal }) => `url(${imgUrlModal})`};
`;
