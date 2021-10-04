import styled from 'styled-components';

export const MainBackground = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 0rem;
  height: 100%;
`;

export const BlackBackground = styled.div`
  background-color: black;
`;

export const BackgroundImage = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 400px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const ChildrenContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
