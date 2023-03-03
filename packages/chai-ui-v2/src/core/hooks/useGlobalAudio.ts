import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { globalAudioState } from "../states";
import { ID } from "../types";

const useGlobalAudio = () => {
  const [globalAudio, setGlobalAudio] = useRecoilState(globalAudioState);

  const playAudio = useCallback(() => {
    if (!globalAudio.audioRef?.current) {
      return;
    }
    if (globalAudio.audioSrc.length > 5) {
      void globalAudio.audioRef.current.play();
    }
  }, [globalAudio]);

  useEffect(() => {
    if (globalAudio.audioState === "play") {
      playAudio();
    }
  }, [globalAudio.audioState, playAudio]);

  const handleClickAudioButton = useCallback(
    (audioId: ID, src: string) => {
      if (!globalAudio.audioRef?.current) return;

      setGlobalAudio({
        ...globalAudio,
        id: audioId,
        audioState: "play",
        audioSrc: src,
      });
    },
    [globalAudio, setGlobalAudio],
  );

  const handleClickAudioStopButton = useCallback(() => {
    if (!globalAudio.audioRef?.current) return;
    setGlobalAudio({
      ...globalAudio,
      audioState: "pause",
    });
    globalAudio.audioRef?.current?.pause();
  }, [setGlobalAudio, globalAudio]);

  return {
    globalAudioRef: globalAudio.audioRef,
    globalAudioId: globalAudio.id,
    globalAudioState: globalAudio.audioState,
    handleClickAudioButton,
    handleClickAudioStopButton,
  };
};

export default useGlobalAudio;
