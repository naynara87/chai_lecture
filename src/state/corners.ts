// recoil state for corners

import { atom } from 'recoil';
import { ID } from '../types/appData';

export type CornerCompleteState = {
  id: ID;
  isCompleted: boolean;
};

export const cornersState = atom<CornerCompleteState[]>({
  key: 'cornersState',
  default: [],
});
