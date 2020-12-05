import styled from 'styled-components';

export const SkillsPageStyles = styled.div`
  min-height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
  padding:40px;

  @media screen and (min-width: 1600px) {
    min-height: 85vh;
    padding: 80px;
  }
`;

export const PageContainer = styled.div`
  background-color:rgba(256,256,256,0.1);
  max-width:1085px;
  h1{
    text-align: center;
    color: orange;
  }
  p {
    width:95%;
    margin:auto;
    margin-bottom:10px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 100%;
  }

`;
