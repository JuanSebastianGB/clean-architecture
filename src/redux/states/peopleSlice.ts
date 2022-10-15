import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { localStorageTypes, Person } from '@/models';

const initialState: Person[] = [];
export const peopleSlice = createSlice({
  name: localStorageTypes.PEOPLE,
  initialState: getLocalStorage(localStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(localStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
