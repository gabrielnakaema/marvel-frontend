import styled from 'styled-components';

interface CardContainerProps {
  imageUrl?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-size: cover;
  flex-direction: column;
  color: white;
  background-color: red;
  border-radius: 20px;
  height: 439px;
  width: 250px;
`;

export const CardInformationContainer = styled.div`
  height: 50%;
  margin-top: auto;
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  font-family: 'Axiforma';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const CardDescription = styled.span`
  font-size: 0.75rem;
  font-weight: 100;
  margin: 0;
  padding: 0;
`;

export const CardButton = styled.button`
  font-family: 'Axiforma';
  border: 0;
  background-color: transparent;
  font-size: 1.25rem;
  font-weight: 100;
  margin: 0;
  padding: 0;
  margin-top: auto;
  cursor: pointer;
  color: white;
`;
