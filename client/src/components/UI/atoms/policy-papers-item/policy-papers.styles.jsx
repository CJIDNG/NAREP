import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* width: 50rem; */
    margin:0 auto;
    justify-content: space-around;
    border-bottom: 1px solid #e6eaf0;
    padding-bottom:1rem;
 @media only screen and (max-width: 800px) {
display:block;
width:35rem;
margin:0  auto;
    }
`;
export const Title = styled.span`

font-size:1.4rem;
text-transform:capitalize;
`;
export const Item = styled.div`
width:50rem;
 color:teal;
&:hover{
 text-decoration:underline;   
color:teal;
cursor: pointer;
}
`;
