export const sortChoices = <T>(arr: T[], setArr: React.Dispatch<React.SetStateAction<T[]>>) => {
  const choicesCopy = [...arr];
  setArr(choicesCopy.sort(() => Math.random() - 0.5));
};
