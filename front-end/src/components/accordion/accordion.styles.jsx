import styled from 'styled-components';

export const AccordionContainer = styled.div`

`;

export const AccordionButton = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;

  :hover {
  background-color: #ccc;
  }

`;

export const AccordionContent = styled.div`
  background-color:rgba(256,256,0,0.2);
  padding: 0 18px;
  max-height: ${({ open }) => open ? '300px' : '0'};
  overflow-y: scroll;
  transition: max-height 0.5s ease;
`;