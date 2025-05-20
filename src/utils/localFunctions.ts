export const getLocal = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setLocal = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocal = (key: string) => {
  localStorage.removeItem(key);
};
