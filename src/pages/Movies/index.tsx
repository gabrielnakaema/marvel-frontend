import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getMovies } from '../../services';

export const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);

  useEffect(() => {
    async function fetchMovies() {
      const response = await getMovies();
      dispatch({ type: 'movies/setMovies', payload: response });
    }
    fetchMovies();
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
