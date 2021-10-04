import { characters } from '../data/characters';
import { comics } from '../data/comics';
import { movies } from '../data/movies';
import { Character, Comic, Movie, User } from '../types';

export const getCharacters = () => {
  return Promise.resolve<Character[]>(characters);
};

export const getMovies = () => {
  return Promise.resolve<Movie[]>(movies);
};

export const getComics = () => {
  return Promise.resolve<Comic[]>(comics);
};

export const login = () => {
  window.localStorage.setItem(
    'marvel-frontend-user',
    JSON.stringify({
      imageUrl: `${process.env.PUBLIC_URL}/images/imagem-perfil.jpg`,
    })
  );
  return Promise.resolve<User>({
    imageUrl: `${process.env.PUBLIC_URL}/images/imagem-perfil.jpg`,
  });
};

export const logout = () => {
  window.localStorage.removeItem('marvel-frontend-user');
  return Promise.resolve();
};
