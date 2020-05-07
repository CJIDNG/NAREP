import styled from 'styled-components';

export const Container = styled.div`
background: white;
font-size:1.1rem;
border-radius: 2px;
display: flex;
flex-wrap: wrap;
padding: 15px 5px;
`;
export const TagInput = styled.input`
border: none;
width: 100%;
background: none;
flex-grow: 1;
padding: 0;
&:focus{
  outline:none;
}
`;
export const InputTags = styled.ul`
 display: inline-flex;
flex-wrap: wrap;
margin: 0;
padding: 0;
width: 100%;
`;

export const InputTag = styled.li`
align-items: center;
background: #85A3BF;
border-radius: 2px;
color: white;
display: flex;
font-weight: 300;
list-style: none;
margin-bottom: 5px;
margin-right: 5px;
padding: 5px 10px;
`;
export const Button = styled.button`
align-items: center;
appearance: none;
background: #333333;
border: none;
border-radius: 50%;
color: white;
cursor: pointer;
display: inline-flex;
font-size: 12px;
height: 15px;
justify-content: center;
line-height: 0;
margin-left: 8px;
width: 15px;
`;
