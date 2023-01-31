import styled from "@emotion/styled";
import { ImagesContent } from "chai-ui";
import React, { useState, useRef, useCallback } from "react";
import { CreatorContent } from "../../hooks/useCreateContent";

const FormFileUpload = styled.form`
  height: 200px;
  width: 300px;
  max-width: 100%;
  text-align: center;
  position: relative;
`;

const InputFileUpload = styled.input`
  display: none;
`;

const LabelFileUpload = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: #cbd5e1;
  background-color: #f8fafcb7;

  &.drag-active {
    background-color: #ffffff;
  }
`;

const UploadButton = styled.button`
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1rem;
  border: none;
  font-family: "Oswald", sans-serif;
  background-color: transparent;

  &:hover {
    text-decoration-line: underline;
  }
`;

const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

interface FileUploaderProps {
  componentIndex?: number;
  componentList: (CreatorContent | undefined)[];
  contentIndex: number;
  setComponentList: React.Dispatch<
    React.SetStateAction<(CreatorContent | undefined)[]>
  >;
}

const FileUploader = ({
  componentIndex,
  contentIndex,
  componentList,
  setComponentList,
}: FileUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const encodeFileToBase64 = useCallback(
    (fileBlob: Blob) => {
      if (componentIndex === undefined) return;

      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        const src = reader.result as string;
        const copyComponentList = JSON.parse(JSON.stringify(componentList));
        const content = copyComponentList[componentIndex]
          ?.content as ImagesContent;
        content.data[contentIndex].src = src;
        setComponentList(copyComponentList);
      };
    },
    [componentIndex, componentList, contentIndex, setComponentList]
  );

  const handleFile = useCallback(
    (files: FileList) => {
      encodeFileToBase64(files[0]);
    },
    [encodeFileToBase64]
  );

  const handleDrag = useCallback(
    (
      event: React.DragEvent<HTMLFormElement> | React.DragEvent<HTMLDivElement>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.type === "dragenter" || event.type === "dragover") {
        setDragActive(true);
      } else if (event.type === "dragleave") {
        setDragActive(false);
      }
    },
    []
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setDragActive(false);
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        handleFile(event.dataTransfer.files);
      }
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (event.target.files && event.target.files[0]) {
        handleFile(event.target.files);
      }
    },
    [handleFile]
  );

  const onButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!inputRef.current) return;
      event.stopPropagation();
      inputRef.current.click();
    },
    []
  );

  return (
    <FormFileUpload
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputFileUpload
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={false}
        onChange={handleChange}
      />
      <LabelFileUpload
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div>
          <p>이미지를 드래그하거나</p>
          <UploadButton onClick={onButtonClick}>업로드해주세요</UploadButton>
        </div>
      </LabelFileUpload>
      {dragActive && (
        <DragFileElement
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></DragFileElement>
      )}
    </FormFileUpload>
  );
};

export default FileUploader;
