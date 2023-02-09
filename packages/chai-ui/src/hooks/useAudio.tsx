import { RefObject, useCallback, useState } from "react";

/**
 * audioButton에서 isAudio: false 일때 사용가능한 hooks
 */
const useAudio = (audioRef: RefObject<HTMLAudioElement>) => {
  const [audioSrc, setAudioSrc] = useState("");
  const [audioIndex, setAudioIndex] = useState<number | undefined>(undefined);
  const [audioState, setAudioState] = useState(false);

  const playAudio = useCallback(async () => {
    if (!audioRef.current) {
      return;
    }
    await audioRef.current.play();
  }, [audioRef]);

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
        void playAudio();
      } else {
        if (audioState) {
          audioRef.current.pause();
          setAudioState(false);
        } else {
          audioRef.current.load();
          void playAudio();
          setAudioState(true);
        }
      }
    },
    [setAudioSrc, audioState, audioIndex, setAudioIndex, audioRef, playAudio],
  );

  audioRef.current?.addEventListener("ended", () => {
    setAudioState(false);
  });

  return {
    handleClickAudioButton,
    audioIndex,
    audioSrc,
    audioState,
    setAudioState,
  };
};

export default useAudio;
