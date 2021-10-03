import { Card } from '../../components/Card';
import { characters } from '../../data/characters';

export const CharactersPage = () => {
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
