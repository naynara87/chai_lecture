import { atom } from "recoil";

export const fullAudioListState = atom<string[]>({
  key: "fullAudioListState",
  default: [],
});
