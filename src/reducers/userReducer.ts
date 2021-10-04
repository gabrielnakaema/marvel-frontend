import { User, UserActions } from '../types';

export const userReducer = (state = {} as User | null, action: UserActions) => {
  switch (action.type) {
    case 'user/setUser':
      return action.payload;
    case 'user/removeUser':
      return null;
    default:
      return state;
  }
};
