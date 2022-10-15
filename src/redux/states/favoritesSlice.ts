import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];
export const favoritesSlice = createSlice({
  name: localStorageTypes.FAVORITES,
  initialState: getLocalStorage(localStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action): any => {
      setLocalStorage(localStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action): any => {
      setLocalStorage(localStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
