import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  function updateStorage(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  }
  return [data, updateStorage];
}
