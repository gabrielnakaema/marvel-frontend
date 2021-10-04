import { Character, CharacterActions } from '../types';

export const charactersReducer = (
  state = [] as Character[],
  action: CharacterActions
) => {
  switch (action.type) {
    case 'characters/setCharacters':
      return action.payload;
    default:
      return state;
  }
};
