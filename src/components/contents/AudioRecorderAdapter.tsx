import React from "react";
import { AudioRecordContent } from "../../types/templateContents";
import AudioRecorder from "./AudioRecorder";

interface AudioRecorderAdapterProps {
  content: AudioRecordContent;
}

const AudioRecorderAdapter = ({ content }: AudioRecorderAdapterProps) => {
  const { data } = content;
  return (
    <>
      {data.map((audioRecorderData, index) => {
        return <AudioRecorder key={index} audioUrl={audioRecorderData.audio.src} />;
      })}
    </>
  );
};

export default AudioRecorderAdapter;
