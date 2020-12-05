import styled, {css} from 'styled-components';

const centerSkill = css`
  font-size: 1.1em;
  margin: 19px 0;
  font-weight: 900;
  letter-spacing:-2px;
`;

const getIconType = (props) => {
    const { className } = props;
    const StringStart = className ? className.match(/^fab\s/ || /^fas\s/) : false;
    if (!StringStart) {
      return centerSkill;
    } 
}

export const Skill = styled.div`

  padding: 5px;
  width:145px;
  display:flex;
  flex-direction: column;
  @media screen and (min-width: 1400px) {
    width:200px;
  }

  @media screen and (min-width: 1800px) {
    width: 250px;
  }

`;

export const SkillIcon = styled.i`

  font-size: 2.5em;
  text-align:center;
  line-height:1.4em;
  border-radius: 4px;
  ${getIconType};
`;

export const SubSkill = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
`;
