import {
  DetailsBackgroundImage,
  RedBackground,
  InformationContainer,
  DetailsContainer,
} from './styles';

interface DetailsProps {
  imageUrl: string;
  extraInformation: React.ReactNode;
  onCloseDetails: () => void;
}

export const Details = (props: DetailsProps) => {
  const { imageUrl, extraInformation } = props;
  return (
    <DetailsContainer>
      <RedBackground>
        <InformationContainer>{extraInformation}</InformationContainer>
      </RedBackground>
      <DetailsBackgroundImage imageUrl={imageUrl}>
        <div
          onClick={props.onCloseDetails}
          style={{ zIndex: 3, cursor: 'pointer' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              position: 'absolute',
              bottom: '10px',
              right: ' 10px',
              width: '32px',
              height: '32px',
            }}
          >
            <title>Close Details</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="white"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M320 320L192 192M192 320l128-128"
            />
          </svg>
        </div>
      </DetailsBackgroundImage>
    </DetailsContainer>
  );
};
