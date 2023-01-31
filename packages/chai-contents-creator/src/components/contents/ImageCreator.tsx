import styled from "@emotion/styled";
import {
  Content,
  ImageContentComponent,
  ImagesContent,
  ImagesWrapper,
} from "chai-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CreatorContent } from "../../hooks/useCreateContent";
import FileUploader from "./FileUploader";

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

interface ImagesCreatorProps {
  onSave(): void;
  id: string;
  componentList: (CreatorContent | undefined)[];
  setComponentList: React.Dispatch<
    React.SetStateAction<(CreatorContent | undefined)[]>
  >;
  addComponentToExistingComponentById: (
    contentType: Content["type"],
    id: string
  ) => void;
}

const ImagesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
}: ImagesCreatorProps) => {
  const [ImagesData, setImagesData] = useState<ImagesContent | undefined>(
    undefined
  );
  const [contentIndex, setContentIndex] = useState<number | undefined>(
    undefined
  );

  const getData = useCallback(() => {
    const imagesContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as ImagesContent;
    const imagesContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setContentIndex(imagesContentIndex);
    setImagesData(imagesContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleDeleteImages = useCallback(
    (index: number) => {
      if (contentIndex === undefined) return;
      if (!ImagesData?.data) return;
      const copyComponentList = [...componentList];

      if (ImagesData?.data.length <= 1) {
        copyComponentList.splice(contentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      const copyTextBoxesDataArr = [...ImagesData.data];
      copyTextBoxesDataArr.splice(index, 1);
      copyComponentList[contentIndex]!.content.data = copyTextBoxesDataArr;
      setComponentList(copyComponentList);
    },
    [ImagesData, componentList, contentIndex, setComponentList]
  );

  const addImages = useCallback(() => {
    addComponentToExistingComponentById("images", id);
  }, [addComponentToExistingComponentById, id]);

  const handleClickHorizontalMode = useCallback(() => {
    if (contentIndex === undefined) return;
    const copyComponentList = [...componentList];
    const content = copyComponentList[contentIndex]?.content as ImagesContent;
    content.options!.isHorizontal = !content.options?.isHorizontal;
    setComponentList(copyComponentList);
  }, [componentList, contentIndex, setComponentList]);

  const contents = useMemo(() => {
    return ImagesData?.data.map((image, index) => {
      return (
        <div>
          {image.src.length > 5 ? (
            <div>
              <ImageContentComponent
                imageAlt={image.src}
                imageSrc={image.src}
                filter="none"
                isZoom={false}
              />
            </div>
          ) : (
            <FileUploader
              componentIndex={contentIndex}
              componentList={componentList}
              setComponentList={setComponentList}
              contentIndex={index}
            />
          )}
          <button
            onClick={() => {
              handleDeleteImages(index);
            }}
          >
            삭제
          </button>
        </div>
      );
    });
  }, [
    ImagesData,
    componentList,
    contentIndex,
    setComponentList,
    handleDeleteImages,
  ]);

  return (
    <ImagesWrapper isHorizontal={ImagesData?.options?.isHorizontal}>
      {contents}
      <Button onClick={handleClickHorizontalMode}>
        {ImagesData?.options?.isHorizontal ? "가로모드" : "세로모드"}
      </Button>
      <button onClick={addImages}>+</button>
    </ImagesWrapper>
  );
};

export default ImagesCreator;
