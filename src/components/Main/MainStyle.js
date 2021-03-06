import styled from 'styled-components'
import bgImg from '../../images/bg-3.jpg'

export const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${bgImg}) center;
  background-size: cover;
`;

export const MainContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  box-shadow: 3px 5px #e9ba23;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const MainText = styled.p`
  font-size: clamp(2rem, 10vw, 3rem);
  margin-bottom: 2rem;
`;

export const MainButton = styled.button`
  color: #fff;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 4rem;
  background: #e31837;
  transition: .2s linear;
  
  &:hover {
    cursor: pointer;
    color: #000;
    background: #ffc500;
    transition: .2s ease-out;
  }
`;
