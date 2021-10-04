import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCharacters } from '../../services';
import { CharacterPageContainer } from './styles';

export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await getCharacters();
      dispatch({ type: 'characters/setCharacters', payload: response });
    }
    fetchCharacters();
  }, [dispatch]);

  const characterCards = characters.map((character) => (
    <Card
      key={character.id}
      title={character.name}
      description={character.description}
      imageUrl={character.imageUrl}
    />
  ));

  return (
    <CharacterPageContainer>
      <HorizontalList listItems={characterCards} />
    </CharacterPageContainer>
  );
};
