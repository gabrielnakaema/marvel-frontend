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
}

export const Card = (props: CardProps) => {
  return (
    <CardContainer imageUrl={props.imageUrl}>
      <CardInformationContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardButton>ver detalhes</CardButton>
      </CardInformationContainer>
    </CardContainer>
  );
};
