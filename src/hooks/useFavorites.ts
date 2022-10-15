import { localStorageTypes, Person } from '@/models';
import { addFavorite } from '@/redux';
import { AppStore } from '@/redux/store';
import { getLocalStorage } from '@/utilities';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((store: AppStore) => store.favorites);
  const findPerson = (id: number): boolean =>
    !!favorites.find((favorite: Person): boolean => favorite.id === id);
  const filterPersons = (id: number): Person[] =>
    favorites.filter((favorite: Person): boolean => favorite.id !== id);
  const handleChange = (person: Person): void => {
    const filteredFavorites = findPerson(person.id)
      ? filterPersons(person.id)
      : [...favorites, person];
    dispatch(addFavorite(filteredFavorites));
  };

  useEffect((): void => {
    const favoritesPersistentData = getLocalStorage(
      localStorageTypes.FAVORITES
    ) as string;
    dispatch(addFavorite(JSON.parse(favoritesPersistentData)));
  }, []);

  return { findPerson, handleChange };
};
