import { ID } from "../types/appData";

export const findOneOrFirst = (array: ID[], id: ID): ID | undefined => {
  const found = array.find((item) => item.toString() === id.toString());
  if (found) {
    return found;
  }
  return array?.[0];
};
