import { User, UserActions } from '../types';

const getUserInfoFromLocalStorage = (): User | null => {
  const userInfo = localStorage.getItem('marvel-frontend-user');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
};

const initialState: User | null = getUserInfoFromLocalStorage();

export const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case 'user/setUser':
      return action.payload;
    case 'user/removeUser':
      return null;
    default:
      return state;
  }
};
