import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SpanStyle = css`
  padding-top:30px;
  font-size:1rem;
`;
export const Container = styled.div`
  display: flex;
  height:100vh;
`;

export const Title = styled.h2`
  margin: 10px 0;
  text-align:center;
  font-size:1.5rem;
  color:teal;
  font-weight:700;
`;
export const FormContainer = styled.form`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:40rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding:3rem 5rem;
  margin: auto;

  @media only screen and (max-width: 800px) {
width: auto;
    }
`;
export const InputErrors = styled.span`
  color:red;
  ${SpanStyle};
`;
export const ToSignin = styled.span`
  ${SpanStyle}
  text-align:center;
`;

export const LinkToSignin = styled(Link)`
 color: teal;
 margin-left:5px;
`;
