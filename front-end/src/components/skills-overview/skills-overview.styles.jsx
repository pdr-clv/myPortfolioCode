import styled from 'styled-components';


export const SkillTitle = styled.h2`
  text-align: center;
`;

export const SkillsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  @media screen and (max-width: 545px) {
    justify-content: center;
  }
`;
