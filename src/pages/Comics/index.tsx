import { Card } from '../../components/Card';
import { comics } from '../../data/comics';

export const ComicsPage = () => {
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
      {comics.map((comic) => (
        <Card
          key={comic.id}
          title={comic.title}
          description={comic.description}
          imageUrl={comic.imageUrl}
        />
      ))}
    </div>
  );
};
