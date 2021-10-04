import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Details } from '../../components/Details';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCharacters } from '../../services';
import { Character } from '../../types';
import {
  CharacterDetailsName,
  CharacterDetailsAppearances,
  CharacterPageContainer,
} from './styles';

export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);
  const [detailIndex, setDetailIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await getCharacters();
      dispatch({ type: 'characters/setCharacters', payload: response });
    }
    fetchCharacters();
  }, [dispatch]);

  const characterCards =
    characters &&
    characters.map((character, index) => (
      <Card
        key={character.id}
        title={character.name}
        description={character.description}
        imageUrl={character.imageUrl}
        onClickDetails={() => setDetailIndex(index)}
      />
    ));

  return (
    <CharacterPageContainer>
      {detailIndex !== null && (
        <Details
          imageUrl={characters[detailIndex].imageUrl}
          extraInformation={
            <CharacterDetails character={characters[detailIndex]} />
          }
          onCloseDetails={() => setDetailIndex(null)}
        />
      )}
      <HorizontalList listItems={characterCards} />
    </CharacterPageContainer>
  );
};

export const CharacterDetails = (props: { character: Character }) => {
  return (
    <>
      <CharacterDetailsName>{props.character.name}</CharacterDetailsName>
      <CharacterDetailsAppearances>
        {props.character.appearances.map((app) => (
          <p key={app}>{app}</p>
        ))}
      </CharacterDetailsAppearances>
    </>
  );
};
