import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

export const Container = styled.div`
  padding-top: 1.5rem;
  min-height: 100%;
`;

export const Title = styled(Textarea)`
  width: 99.5%;
   min-height: 35px;
   border: none;
   background-color: white;
   color: #404040;
   font-size: 25px;
   margin: auto; 
   margin-bottom: 4px;
   overflow-y:hidden; 
   font-size: 34px;
   resize: none;
   font-weight: bold;
   &:focus{
       outline:none;
   }
`
