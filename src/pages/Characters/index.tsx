import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCharacters } from '../../services';

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

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5rem',
        overflowX: 'auto',
      }}
    >
      {characters.map((character) => (
        <Card
          key={character.id}
          title={character.name}
          description={character.description}
          imageUrl={character.imageUrl}
        />
      ))}
    </div>
  );
};
