import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { globalAudioState } from "./states";

interface GlobalAudioProviderProps {
  children: React.ReactNode;
}
const GlobalAudioProvider = ({ children }: GlobalAudioProviderProps) => {
  const [globalAudio, setGlobalAudio] = useRecoilState(globalAudioState);
  const globalAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setGlobalAudio({
      id: -1,
      audioSrc: "",
      audioState: "pause",
      audioRef: globalAudioRef,
    });
  }, [setGlobalAudio]);

  return (
    <>
      {children}
      <audio ref={globalAudioRef} src={globalAudio.audioSrc} />
    </>
  );
};

export default GlobalAudioProvider;
