import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeBannerContainer = styled.div`
 display:flex;
 flex-wrap:wrap;
 margin:5rem;

  @media only screen and (max-width: 800px) {
      display:flex;
      flex-grow:1;
      flex-direction:column;
      justify-content:center;
      align-items:center;
  }
`;

export const HomeBannerTextContainer = styled.div`
  flex-grow:1;
  width:40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:bolder;
  flex-direction:column;
  flex-wrap:wrap;
  padding:2rem;
    @media only screen and (max-width: 800px) {
    width:100%;
    }
`;
export const HomeBannerText = styled.p`
  font-weight:500;
  font-size:1.5rem;

`;
export const HomeBannerImage = styled.img`
  flex-grow:1;
  width:50%;
  padding:2rem;
  display:block;
  height:auto;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
 display:none;
  }
`;

export const Button = styled(Link)`
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
  line-height: 46px;
  border-radius:10rem;
width:100%;
  &:hover {
    background-color: white;
    color: teal;
    border: 1px solid teal;
  }
`;
