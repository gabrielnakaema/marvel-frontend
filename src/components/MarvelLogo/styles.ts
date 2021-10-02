import styled from 'styled-components';

export const MarvelWrapper = styled.div`
  width: 100%;
  background-color: red;
  font-family: 'MarvelRegular';
`;

export const MarvelText = styled.p<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '6rem'};
  font-weight: normal;
  color: white;
  margin: 0;
  line-height: 0.75;
  padding: 0.15em;
  padding-bottom: 0;
`;
