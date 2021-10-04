export interface Character {
  id: number;
  name: string;
  description: string;
  appearances: string[];
  fanRating: number;
  imageUrl: string;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  streamingPlatformLogos: string[];
  rating: number;
  mcuOrder: number;
  releaseYear: number;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  availableAtLogos: string[];
}

export interface User {
  imageUrl: string;
}

export type CharacterActions = SetCharacterAction;

interface SetCharacterAction {
  type: 'characters/setCharacters';
  payload: Character[];
}

export type MovieActions = SetMovieAction;

interface SetMovieAction {
  type: 'movies/setMovies';
  payload: Movie[];
}

export type ComicActions = SetComicAction;

interface SetComicAction {
  type: 'comics/setComics';
  payload: Comic[];
}

export type UserActions = SetUserAction | RemoveUserAction;

interface SetUserAction {
  type: 'user/setUser';
  payload: User;
}

interface RemoveUserAction {
  type: 'user/removeUser';
}
