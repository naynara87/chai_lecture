import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { colorPalette } from '../../styles/colorPalette';
import { changePXtoVW } from '../../utils/styles';
import AudioButton from '../atoms/AudioButton';
import IconHeadset from '../atoms/svg/IconHeadset';
import IconMic from '../atoms/svg/IconMic';
import IconPlaying from '../atoms/svg/IconPlaying';
import IconRetry from '../atoms/svg/IconRetry';

interface RecordedAudioButtonProps {
  customCss?: SerializedStyles;
}

const RecordedAudioButton = styled.button<RecordedAudioButtonProps>`
  position: relative;
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  margin: 0 ${changePXtoVW(10)};
  border-radius: 50%;

  ${(props) => props.customCss}
`;

interface RecordingAudioButtonProps {
  customCss?: SerializedStyles | string;
}

const RecordingAudioButton = styled.button<RecordingAudioButtonProps>`
  position: relative;
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  border-radius: 50%;
  margin: 0 ${changePXtoVW(10)};

  ${(props) => props.customCss}
`;

const grayBackground = css`
  background-color: ${colorPalette.iconGray};
  cursor: default;
`;

const currentBackground = css`
  background-color: ${colorPalette.confirmBtn};
  cursor: pointer;
`;

const AudioRecorderStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
  margin-top: ${changePXtoVW(16)};
`;

type recordingAudioState = 'record' | 'pause' | 'recordAudioPlaying';

interface AudioRecorderProps {
  audioUrl: string;
}

const AudioRecorder = ({ audioUrl }: AudioRecorderProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [pronounceAudio, setPronounceAudio] = useState(false);
  const [recordedAudioState, setRecordedAudioState] = useState(false);
  const [recordingAudioState, setRecordingAudioState] =
    useState<recordingAudioState>('pause');
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
      video: false,
      askPermissionOnMount: true,
      blobPropertyBag: {
        type: 'audio/wav',
      },
    });

  // const getLocalStream = useCallback(async () => {
  // let navigatorCopy = navigator as any;
  // if (navigatorCopy.mediaDevices === undefined) {
  //   navigatorCopy.mediaDevices = {};
  //   if (navigator.mediaDevices.getUserMedia === undefined) {
  //     navigator.mediaDevices.getUserMedia = function (constraints) {
  //       let getUserMedia =
  //         (navigator as any).getUserMedia ||
  //         (navigator as any).webkitGetUserMedia ||
  //         (navigator as any).mozGetUserMedia ||
  //         (navigator as any).msGetUserMedia;

  //       if (!getUserMedia) {
  //         return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
  //       }

  //       return new Promise(function (resolve, reject) {
  //         getUserMedia.call(navigator, constraints, resolve, reject);
  //       });
  //     };
  //   }
  // }
  // return await navigator.mediaDevices?.getUserMedia({ audio: true });
  // new window.MediaRecorder(stream);
  // }, []);

  // useEffect(() => {
  //   getLocalStream()
  //     .then((stream) => {
  //       console.log("stream", stream);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, [getLocalStream]);

  const handleClickRecordedAudioButton = useCallback(() => {
    if (!audioRef.current || pronounceAudio) {
      return;
    }

    if (status === 'stopped') {
      audioRef.current.play();
      setRecordedAudioState(true);
      setRecordingAudioState('recordAudioPlaying');
    }

    if (status === 'stopped' && recordedAudioState) {
      audioRef.current.pause();
      setRecordedAudioState(false);
      setRecordingAudioState('pause');
    }
  }, [recordedAudioState, status, pronounceAudio]);

  audioRef.current?.addEventListener('ended', () => {
    setRecordedAudioState(false);
    setRecordingAudioState('pause');
  });

  const handleClickRecordingAudioButton = useCallback(() => {
    if (!audioRef.current || recordedAudioState || pronounceAudio) {
      return;
    }
    if (status === 'idle' || status === 'stopped') {
      startRecording();
      setRecordingAudioState('record');
      setRecordedAudioState(false);
    } else {
      stopRecording();
      setRecordingAudioState('pause');
    }
  }, [
    pronounceAudio,
    recordedAudioState,
    startRecording,
    status,
    stopRecording,
  ]);

  const recodingAudioButtonColor = useMemo(() => {
    if (recordingAudioState === 'recordAudioPlaying' || pronounceAudio) {
      return grayBackground;
    } else {
      return currentBackground;
    }
  }, [recordingAudioState, pronounceAudio]);

  // FIXME : 첫번째, 두번째 파라미터를 사용안하고 있기 때문에 리팩토링이 필요하다
  const handlePronounceAudio = useCallback(
    (_: string, __: number, isPlayed: boolean) => {
      if (isPlayed) {
        setPronounceAudio(true);
        setRecordedAudioState(false);
        setRecordingAudioState('pause');
      } else {
        setPronounceAudio(false);
      }
    },
    []
  );

  const renderRecordingAudioIcon = useMemo(() => {
    if (status === 'recording') {
      return <IconPlaying />;
    } else {
      if (status === 'idle') {
        return <IconMic />;
      } else if (status === 'stopped') {
        return <IconRetry />;
      }
    }
  }, [status]);

  return (
    <AudioRecorderStyle>
      {/* <p>{status}</p> */}
      <RecordedAudioButton
        onClick={handleClickRecordedAudioButton}
        customCss={
          status === 'stopped' && !pronounceAudio
            ? currentBackground
            : grayBackground
        }
      >
        {recordedAudioState ? <IconPlaying /> : <IconHeadset />}
      </RecordedAudioButton>
      <RecordingAudioButton
        onClick={handleClickRecordingAudioButton}
        customCss={recodingAudioButtonColor}
      >
        {renderRecordingAudioIcon}
      </RecordingAudioButton>
      <audio ref={audioRef} src={mediaBlobUrl ?? ''} />
      <AudioButton
        audioUrl={audioUrl}
        isAudio={true}
        audioHandler={handlePronounceAudio}
        audioHide={
          recordedAudioState || recordingAudioState !== 'pause' ? true : false
        }
        customCss={
          recordedAudioState || recordingAudioState !== 'pause'
            ? grayBackground
            : currentBackground
        }
      />
    </AudioRecorderStyle>
  );
};

export default AudioRecorder;
