import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getMovies } from '../../services';
import { MoviesPageContainer } from './styles';

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

  const moviesElements =
    movies &&
    movies.map((movie) => (
      <Card
        key={movie.id}
        title={movie.title}
        description={movie.description}
        imageUrl={movie.imageUrl}
      />
    ));

  return (
    <MoviesPageContainer>
      <HorizontalList listItems={moviesElements} />
    </MoviesPageContainer>
  );
};
