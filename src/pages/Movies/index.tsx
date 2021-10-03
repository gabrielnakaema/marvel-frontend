import { Card } from '../../components/Card';
import { movies } from '../../data/movies';

export const MoviesPage = () => {
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
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
};
