import {
  MainBackground,
  BlackBackground,
  BackgroundImage,
  ChildrenContainer,
} from './styles';

export const Background = (props: { children: React.ReactNode }) => {
  return (
    <MainBackground>
      <BlackBackground />
      <BackgroundImage
        imageUrl={process.env.PUBLIC_URL + '/images/background-image.jpg'}
      />
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </MainBackground>
  );
};
