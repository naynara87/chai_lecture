import React, { RefObject, useCallback, useState } from "react";

const useAudio = (audioRef: RefObject<HTMLAudioElement>) => {
  const [audioSrc, setAudioSrc] = useState("");
  const [audioIndex, setAudioIndex] = useState(0);
  const [audioState, setAudioState] = useState(false);

  const handleClickAudioButton = useCallback(
    (src: string, index: number) => {
      if (!audioRef.current) {
        return;
      }
      if (audioIndex !== index) {
        setAudioIndex(index);
        setAudioSrc(src);
        setAudioState(true);
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      } else {
        if (audioState) {
          audioRef.current.pause();
          setAudioState(false);
        } else {
          audioRef.current.play();
          setAudioState(true);
        }
      }
    },
    [setAudioSrc, audioState, audioIndex, setAudioIndex, audioRef],
  );

  return {
    handleClickAudioButton,
    audioSrc,
    audioIndex,
  };
};

export default useAudio;
