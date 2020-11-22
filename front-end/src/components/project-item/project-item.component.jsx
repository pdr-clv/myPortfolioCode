import React, {useState, useEffect, useRef} from 'react';
import slugify from 'react-slugify';

import ProjectLinks from './project-links-div.component';
import Badge from '../badge/badge.component';

import {
  ProjectItemStyled,
  ProjectImg,
  ProjectText,
  BadgeWrap,
  Description
} from './project-item.styles';

const ProjectItem = (props) =>{
  const {name,imgUrl,description,projectLinks,setModal,setimgUrl}=props;
  
  // Hook to get size of a given element. Pending of refactoring and place it in an extern function.
  const useElementSize = (element) => {
    // Initialize state with undefined width/height
    const [elementSize, setElementSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setElementSize({
          width: element.current.clientWidth,
          height: element.current.clientHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty array ensures that effect is only run on mount

    return elementSize;
  };

  //check in Description div is overfloaded
  const [overFloaded, setOverFload] = useState(false);
  const elementDiv = useRef(null);
  const elementP = useRef(null);
  //to get size of element P inside Div, we will check if P is greather than div, and that means it is overfloaded.
  //also is possible checking scrollheight vs clientHeight, and you don't have to use p vs div comparison.
  const sizeP = useElementSize(elementP);
  const sizeDiv = useElementSize(elementDiv);
  const checkOverfloadedDiv = (sizeP,sizeDiv) => {
    setOverFload(sizeP.height > sizeDiv.height || sizeP.width > sizeDiv.width);
  };
  useEffect(()=>checkOverfloadedDiv(sizeP,sizeDiv));

  //Description div full Height if you want to read all content of div because is overfloaded
  const [fullHeightDescription, setFullHeight] = useState(false);
  
  let { skills }= props;
  if (!skills) {
    skills = [];
  };

  return (<ProjectItemStyled>
    { projectLinks.webLink && <a 
          href= { projectLinks.webLink } 
          target='_blank'
          rel='noopener noreferrer'
        >
          <ProjectImg imgUrl={imgUrl}/>
      </a>
    }
    { projectLinks.picGallery && 
      <ProjectImg 
        onClick={()=>{
          setModal();
          setimgUrl(`${projectLinks.picGallery}`)
          }
        }
        imgUrl={imgUrl}
      />
    }
  <ProjectText>
    <h4>{name.toUpperCase()}</h4>
    <Description
      ref={elementDiv}
      overFloaded = {overFloaded}
      fullHeightDescription= {fullHeightDescription}>
      <p ref= {elementP}>{description}</p>
      <span 
        onClick = {()=>setFullHeight(true)}
      >More...</span>
    </Description>
    <ProjectLinks 
      projectLinks = {projectLinks}
      setModal = {setModal}
      setimgUrl ={setimgUrl} />
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