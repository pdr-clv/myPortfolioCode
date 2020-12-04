import styled, {css} from 'styled-components';

export const AccordionContainer = styled.div`

`;

const selected = css`
  background-color: rgb(255,103,0);
  font-weight: bold;
`;

const caretRotated = css`
  transform: rotate(180deg);
  transition: transform 0.4s linear;
`;

const rotateCaret = ({selectedStatus, ...otherprops}) => {
  if (selectedStatus) {
    return caretRotated;
  }
}

const getSelected = ({selectedStatus, ...otherprops}) => {
  if (selectedStatus) {
    return selected;
  }
}

export const AccordionButton = styled.button`
  display:flex;
  justify-content: space-between;
  background-color: orange;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;

  :hover {
    ${selected};
  }

  ${getSelected}

  i {
    ${rotateCaret}
  }

`;

export const AccordionContent = styled.div`
  background-color:rgba(255,103,0,0.1);
  padding: 0 18px;
  max-height: ${({open}) => open ? '100vh' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease;

  p {
    margin: 2px;
  }

  a {
    color: orange;
    font-size: 0.9em;

    :hover {
      color:rgb(255,103,0);
    }
  }
  @media screen and (max-width: 800px) {
    max-height: ${({open}) => open ? '150vh' : '0'};
  }

  @media screen and (max-width: 359px) {
    max-height: ${({open}) => open ? '200vh' : '0'};
  }

  @media screen and (max-width: 320px) {
    max-height: ${({open}) => open ? '250vh' : '0'};
  }
  
`;