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
    if (globalAudio.audioState === "playing") {
      playAudio();
    }
  }, [globalAudio.audioState, playAudio]);

  const handleClickAudioButton = useCallback(
    (audioId: ID, src: string) => {
      if (!globalAudio.audioRef?.current) return;
      if (audioId !== globalAudio.id) {
        globalAudio.audioRef.current.pause();
        globalAudio.audioRef.current.load();
      }
      setGlobalAudio({
        ...globalAudio,
        id: audioId,
        audioState: "playing",
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

  const handleAudioReset = useCallback(() => {
    setGlobalAudio({
      id: -1,
      audioSrc: "",
      audioState: "pause",
      audioRef: globalAudio.audioRef,
    });
  }, [setGlobalAudio, globalAudio.audioRef]);

  return {
    globalAudioRef: globalAudio.audioRef,
    globalAudioId: globalAudio.id,
    globalAudioState: globalAudio.audioState,
    handleClickAudioButton,
    handleClickAudioStopButton,
    handleAudioReset,
  };
};

export default useGlobalAudio;
