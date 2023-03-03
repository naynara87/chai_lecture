import { atom } from "recoil";
import { ID } from "../types";

interface globalAudioStateData {
  id: ID;
  audioSrc: string;
  audioState: "play" | "pause";
  audioRef?: React.RefObject<HTMLAudioElement>;
}

export const globalAudioState = atom<globalAudioStateData>({
  key: "globalAudioState",
  default: {
    id: -1,
    audioSrc: "",
    audioState: "pause",
  },
});
