import { createContext, useContext } from 'react';

/**
 * @template T
 * @param {string} displayName
 * @returns {{ Context: import('react').Context<T | null>, useContext: () => T }}
 */
export function createDataContext(displayName) {
  const Context = createContext(null);
  Context.displayName = displayName;

  function useDataContext() {
    const value = useContext(Context);
    if (value == null) {
      throw new Error(`${displayName} must be used within its Provider`);
    }
    return value;
  }

  return { Context, useContext: useDataContext };
}
