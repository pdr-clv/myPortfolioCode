import styled from 'styled-components';

export const FormStyles = styled.form`
  padding: 35px;
  display:flex;
  flex-direction:column;
  background-color: rgba(256,256,256,0.8);
  box-shadow: 0 0 20px 0px rgb(0,0,0);
  width: 70%;
  margin: 40px auto;
  @media screen and (max-width: 768px) {
    width:85%;
  }

  @media screen and (max-width: 576px) {
    width:90%;
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    width:95%;
    padding: 10px;
  }

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
`;

export const SpanCounter = styled.span`
  //we place in the right.
  display:flex;
  justify-content:flex-end;
  color: grey;
  font-weight: bold;
  font-size: 0.6em;
  padding: 5px;
  //margin -15 because it is the marginbottom of textarea element.
  margin: -15px 0 0 0;
  
`;

export const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 0 0;
`;

export const SubmitInput= styled.input`
  background: orange;
  font-weight: bold;
  padding: 10px 25px; 
  color: black;
  border: none;
  border-bottom: solid 2px rgb(255,103,0); 
  cursor: pointer;

  :hover{
    color: white;
    background:  rgb(255,103,0);
    border-bottom: solid 2px orange;
  }

  @media screen and (max-width: 576px) {
    width:100%;
  }
`;