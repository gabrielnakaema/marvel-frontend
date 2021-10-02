import { MarvelWrapper, MarvelText } from './styles';

interface MarvelLogoProps {
  fontSize?: string;
}

export const MarvelLogo = (props: MarvelLogoProps) => {
  return (
    <MarvelWrapper>
      <MarvelText fontSize={props.fontSize}>MARVEL</MarvelText>
    </MarvelWrapper>
  );
};
