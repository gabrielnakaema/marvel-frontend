import { createStore, combineReducers } from 'redux';
import { charactersReducer } from '../reducers/charactersReducer';
import { moviesReducer } from '../reducers/moviesReducer';
import { comicsReducer } from '../reducers/comicsReducer';
import { userReducer } from '../reducers/userReducer';

export const store = createStore(
  combineReducers({
    characters: charactersReducer,
    movies: moviesReducer,
    comics: comicsReducer,
    user: userReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
