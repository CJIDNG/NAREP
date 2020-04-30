import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  height: 3.5rem;
  letter-spacing: 0.5px;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: teal;
  color: white;
  border: none;
  margin:5rem 0; 
  border-radius:10rem;
width:100%;
  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;
