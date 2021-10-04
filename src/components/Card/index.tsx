import {
  CardButton,
  CardContainer,
  CardDescription,
  CardInformationContainer,
  CardTitle,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClickDetails: () => void;
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer imageUrl={props.imageUrl}>
      <CardInformationContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardButton onClick={props.onClickDetails}>ver detalhes</CardButton>
      </CardInformationContainer>
    </CardContainer>
  );
};
