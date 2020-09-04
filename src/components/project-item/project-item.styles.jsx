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

const ViewProjectLinks = css`
  background-color: rgba(0,0,0,0.7);
  color:orange;
  font-size:0.9em;
  padding:4px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: orange;
    color:black;
  }
`;

export const ProjectLinksDiv = styled.div`

  padding: 15px;

  a {
    ${ViewProjectLinks};
  }

  span {
    cursor: pointer;
    ${ViewProjectLinks};
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
    return showSpanMore;
  }
}

const getSpanHidden = (props) => {
  const { fullHeightDescription } = props
  if (fullHeightDescription) {
    return hideSpanMore;
  }
}

export const Description = styled(DetectableOverflow)`
  display:block;
  line-height: 1.1em;
  height: 6.6em;
  margin: 5px;
  position:relative; /*this is the key*/
  z-index:10;
  overflow: hidden;
  p {
    margin:0 5px;
  }
  span {
    display: none;
    z-index:20;
    cursor: pointer;
    position:absolute;
	  font-weight:bold;
    width:100px;
    bottom:2px;
    right:2px;
	  border:1px solid white;
    background-color: rgb(35,35,35);
    text-align: center;
  }

  ${getDivFull}
  ${getSpanHidden}

  @media screen and (max-width: 425px) {
    font-size:0.8em;
    line-height: 1em;
    height: 6em;
  }
`;

const hideSpanMore = css`

  height: auto;

  span {
    display: none;
  }
`;

const showSpanMore = css`

  span {
    display:block;
  }
`;




