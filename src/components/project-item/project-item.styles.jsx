import styled, { css } from 'styled-components';
import DetectableOverflow from 'react-detectable-overflow';

export const ProjectItemStyled = styled.div`
  background-color:rgba(256,256,256,0.1);
  width: 23%;
  display:flex;
  flex-direction:column;
  margin:7px;
  margin-bottom: 15px;

  @media screen and (max-width: 1440px) {
    width: 32%;
  }

  @media screen and (max-width: 1024px) {
    width: 48%;
  }

  @media screen and (max-width: 690px) {
    width: 97%;
  }

`;

const getUrlImg = (props) => {
  const {imgUrl} = props;
  return imgUrl;
}

export const ProjectImg = styled.div`
  height:225px;
  background-size: cover;
  background-position: center;
  background-image: url(${getUrlImg});
`;

export const ProjectText = styled.div`
  h4 {
    text-align: center;
    color: orange;
  }


`;

export const ProyectsLinksDiv = styled.div`

  display: flex;
  justify-content: space-around;
  padding: 10px;
  a {
    color:rgb(110,110,110);
    font-size:0.9em;
  }

`;

export const BadgeWrap = styled.div`

  padding: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;

`;


const getDivFull = (props) => {
  const { overFloaded } = props;
  if (overFloaded) {
    return floadedStyles;
  }
}

const getSpanHidden = (props) => {
  const { fullHeightDescription } = props
  if (fullHeightDescription) {
    return hideSpan;
  }
}

export const Description = styled(DetectableOverflow)`
  height: 135px;
  margin: 5px;
  position:relative; /*this is the key*/
  z-index:10;
  span {
    display: none
  }

  ${getDivFull}
  ${getSpanHidden}

`;


const hideSpan = css`

  display:block;
  height: auto;

  span {
    display: none;
  }
`;

const floadedStyles = css`

  span {
    display:block;
    z-index:20;
    cursor: pointer;
    position:absolute;
	  font-weight:bold;
    width:100px;
    bottom:0px;
    right:0px;
	  border:1px solid white;
    background-color: rgb(35,35,35);
    text-align: center;
  }
`;




