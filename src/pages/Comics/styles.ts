import styled from 'styled-components';
export const ComicsPageContainer = styled.div`
  margin: auto;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
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
      rgb(33, 33, 33, 0.74) 80coi%,
      rgb(0, 0, 0, 0) 100%
    );
  }
  .swiper-container {
    width: 90%;

    @media (min-width: 500) {
      width: 80%;
    }

    @media (min-width: 600px) {
      width: 70%;
    }

    @media (min-width: 880px) {
      width: 95%;
    }
  }
`;
