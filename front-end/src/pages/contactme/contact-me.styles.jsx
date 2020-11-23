import styled from 'styled-components';

export const ContactStyles = styled.div`
  font-size:1em;
  min-height:550px;
  max-width: 1200px;
  margin: auto;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  display:flex;
  flex-direction: column;
  form {
    padding: 50px;
    display:flex;
    flex-direction:column;
  }
`;

export const Notification = styled.p`
  /*padding: 10px;*/
  overflow:hidden;
  background-color: green;
  color: white;
  height: ${({ notification }) => notification ? '100%' : '0'};
`;