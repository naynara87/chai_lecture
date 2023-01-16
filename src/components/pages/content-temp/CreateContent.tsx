import React, { useMemo, useRef } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

interface CreateContentProps {
  provided: DraggableProvided;
  contentType: string;
  handleSubmitContent: (
    dropzoneName: string,
    contentId: string,
    inputText: React.MutableRefObject<string>,
  ) => void;
  isSubmit: boolean;
  dropzoneName: string;
  contentText: React.MutableRefObject<string> | undefined;
  contentId: string;
}

const CreateContent = ({
  provided,
  contentType,
  handleSubmitContent,
  isSubmit,
  dropzoneName,
  contentText,
  contentId,
}: CreateContentProps) => {
  const inputText = useRef("");

  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputText.current = event.target.value;
  };

  const showContent = useMemo(() => {
    switch (contentType) {
      case "글자":
        return isSubmit && contentText?.current ? (
          <span>{contentText.current}</span>
        ) : (
          <input placeholder="텍스트를 입력해주세요." onChange={handleChangeUrl} />
        );
      case "사진":
        return isSubmit && contentText?.current ? (
          <img src={contentText.current} alt={contentText.current} />
        ) : (
          <input type="text" placeholder="이미지 url을 입력해주세요." onChange={handleChangeUrl} />
        );
      case "음원":
        return isSubmit && contentText?.current ? (
          <audio src={contentText.current} />
        ) : (
          <input type="text" placeholder="오디오 url을 입력해주세요." onChange={handleChangeUrl} />
        );
      case "영상":
        return isSubmit && contentText?.current ? (
          <video src={contentText.current} />
        ) : (
          <input type="text" placeholder="비디오 url을 입력해주세요." onChange={handleChangeUrl} />
        );
    }
  }, [contentType, contentText, isSubmit]);

  return (
    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmitContent(dropzoneName, contentId, inputText);
        }}
      >
        {showContent}
      </form>
    </div>
  );
};

export default CreateContent;
