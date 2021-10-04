import styled from 'styled-components';
export const CharacterPageContainer = styled.div`
  position: relative;
  margin: auto;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      #000 0%,
      rgb(33, 33, 33, 0.74) 80%,
      rgb(0, 0, 0, 0) 100%
    );
  }
  .swiper-container {
    width: 95%;
  }
`;

export const CharacterDetailsName = styled.h1`
  color: white;
  font-family: 'Axiforma';
  font-weight: bold;
  font-size: 2.5rem;
`;

export const CharacterDetailsAppearances = styled.div`
  color: white;
  font-family: 'Axiforma';
  font-weight: bold;
`;
