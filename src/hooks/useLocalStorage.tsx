import { useState } from "react";

type TaskItemType = {
  task: string;
  completed: boolean;
  date: string;
};

type initialValueType = string | TaskItemType[];

// HELP: Is this custom hook weird ??
export const useLocalStorage = (
  key: string,
  initialValue: initialValueType
) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value: (arg: string) => void) => {
    // Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(value);
    // Set to localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

function getLocalStorageValue(key: string, initialValue: initialValueType) {
  const itemFromStorage = localStorage.getItem(key);

  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}
