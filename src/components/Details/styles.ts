import styled from 'styled-components';

export const DetailsContainer = styled.div`
  position: absolute;
  margin: auto;
  left: 25%;
  width: 50%;
  height: 28rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 0, 0, 1));
  border-radius: 15px;
  z-index: 999;
  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 800px 300px black;
  }
`;

export const RedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #400e0e 0%, #ff0000 60%);
  border-radius: 15px;
`;

export const InformationContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 2rem;
`;

export const DetailsBackgroundImage = styled.div<{ imageUrl: string }>`
  position: relative;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  width: 40%;
  margin-left: auto;
  height: 100%;
  z-index: 2;
`;
