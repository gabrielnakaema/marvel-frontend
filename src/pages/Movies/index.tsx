import { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card } from '../../components/Card';
import { Details } from '../../components/Details';
import { HorizontalList } from '../../components/HorizontalList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getMovies } from '../../services';
import { Movie } from '../../types';
import {
  MovieDetailsDescription,
  MovieDetailsTitle,
  MoviesPageContainer,
  Subtitle,
} from './styles';

export const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);
  const [detailIndex, setDetailIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      const response = await getMovies();
      dispatch({ type: 'movies/setMovies', payload: response });
    }
    fetchMovies();
  }, [dispatch]);

  const moviesElements =
    movies &&
    movies.map((movie, index) => (
      <Card
        key={movie.id}
        title={movie.title}
        description={movie.description}
        imageUrl={movie.imageUrl}
        onClickDetails={() => {
          setDetailIndex(index);
        }}
      />
    ));

  return (
    <MoviesPageContainer>
      {detailIndex !== null && (
        <Details
          imageUrl={movies[detailIndex].imageUrl}
          extraInformation={<MovieDetails movie={movies[detailIndex]} />}
          onCloseDetails={() => setDetailIndex(null)}
        />
      )}
      <HorizontalList listItems={moviesElements} />
    </MoviesPageContainer>
  );
};

const MovieDetails = (props: { movie: Movie }) => {
  return (
    <>
      <MovieDetailsTitle>{props.movie.title}</MovieDetailsTitle>
      <MovieDetailsDescription>
        {props.movie.description}
      </MovieDetailsDescription>
      <Subtitle>Disponível em streaming:</Subtitle>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {props.movie.streamingPlatformLogos.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt="logo"
            height="32px"
            width="32px"
            style={{ backgroundColor: 'white', borderRadius: '5px' }}
          />
        ))}
      </div>

      <Subtitle>Crítica</Subtitle>
      <StarRatingComponent
        name="criticas"
        starCount={5}
        value={props.movie.rating}
      />
    </>
  );
};
