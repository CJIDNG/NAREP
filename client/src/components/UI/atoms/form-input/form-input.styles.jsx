import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
const FormStyles = css`background: none;
  border-bottom: 1px solid #dcdcdc;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  &:focus {
    outline: none;
  }
`;
export const GroupContainer = styled.div`
  position: relative;
  margin: 35px 0 10px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
   input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
export const FormInputContainer = styled.input`
 padding: 12px 20px;
 ${FormStyles}
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  padding:5px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
export const TextAreaContainer = styled.textarea`
padding: 5px 10px;
 ${FormStyles}
   &:focus {
    outline: none;
  }
  height: 10rem;
`;

export const FileInput = styled.input`
height:3rem;
`;
