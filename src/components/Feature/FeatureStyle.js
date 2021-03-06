import styled from 'styled-components';
import FeatureImg from '../../images/feature-3.jpg';

export const FeatureContainer = styled.div`
  height: 100vh;
  max-height: 500px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeatureImg}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  
  h2 {
    font-size: clamp(1rem, 3vw, 4rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: .2s ease-in;
  
  &:hover {
    color: #fff;
    background: #e31837;
    transition: .2s ease-out;
    cursor: pointer;
  }
`;
