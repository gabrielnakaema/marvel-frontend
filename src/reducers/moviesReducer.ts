import { Movie, MovieActions } from '../types';

export const moviesReducer = (state = [] as Movie[], action: MovieActions) => {
  switch (action.type) {
    case 'movies/setMovies':
      return action.payload;
    default:
      return state;
  }
};
