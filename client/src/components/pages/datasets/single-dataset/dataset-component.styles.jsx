import styled from 'styled-components';

export const TagStyle = styled.span`
&:not(:last-child)::after{
  content: ", ";
}
`;

export const Container = styled.div`
width: 40%;
padding: 2rem;
margin: 5rem;
border: 1px solid #a0aec0;;
 @media only screen and (max-width: 800px) {
display:block;
width:35rem;
margin:2.5rem;
    }
`;
