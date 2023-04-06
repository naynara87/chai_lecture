import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

function useSafeKey<T = any>(arr: T[]) {
  const keyListRef = useRef<string[]>(arr.map(() => uuidV4()));

  console.log(keyListRef.current);

  const addKeyByArrayLength = (index: number) => {
    keyListRef.current = [
      ...keyListRef.current.slice(0, index),
      uuidV4(),
      ...keyListRef.current.slice(index),
    ];
  };

  const deleteKeyByIndex = (index: number) => {
    keyListRef.current = [
      ...keyListRef.current.slice(0, index),
      ...keyListRef.current.slice(index + 1),
    ];
  };

  const getKeyByIndex = (index: number) => {
    return keyListRef.current[index] ?? index;
  };

  return {
    addKeyByArrayLength,
    deleteKeyByIndex,
    getKeyByIndex,
  };
}

export default useSafeKey;
