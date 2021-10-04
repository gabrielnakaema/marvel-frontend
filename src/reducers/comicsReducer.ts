import { Comic, ComicActions } from '../types';

export const comicsReducer = (state = [] as Comic[], action: ComicActions) => {
  switch (action.type) {
    case 'comics/setComics':
      return action.payload;
    default:
      return state;
  }
};
