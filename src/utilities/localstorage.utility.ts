const setLocalStorage = (key: string, value: any): void =>
  localStorage.setItem(key, JSON.stringify(value));

const getLocalStorage = (key: string): string | null =>
  localStorage.getItem(key);

export { setLocalStorage, getLocalStorage };
