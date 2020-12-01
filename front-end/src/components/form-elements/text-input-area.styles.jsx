import styled,{ css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'rgb(255,103,0)';

const shrinkLabelStyles = css`
  top: -8px;
  font-size: 14px;
  color: ${mainColor};
  font-weight: bold;
`;

const textContainerStyles = css`
  background: none;
  background-color: white;
  color: black;
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${mainColor};
  margin: 15px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles};
  }
`;

export const GroupContainer = styled.div`
  position: relative;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const TextInputContainer = styled.input`
  ${textContainerStyles}
`;

export const TextAreaContainer = styled.textarea`
  ${textContainerStyles}
  resize: none;
  height: 7em;
`;

export const TextLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 25px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles};
  }
`;
//cuando se hace focus en el input, se aplica los estilos shrink
