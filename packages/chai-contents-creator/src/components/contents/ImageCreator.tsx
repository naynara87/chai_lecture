import {
  ImageContentComponent,
  ImagesContent,
  ImagesOptions,
  ImagesWrapper,
} from "chai-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import ButtonCreator from "../atoms/ButtonCreator";
import { OptionButtonWrapper } from "../atoms/OptionButtonWrapper";
import FileUploader from "../molecules/FileUploader";

interface ImagesCreatorProps extends ContentProps {}

const ImagesCreator = ({
  id,
  componentList,
  setComponentList,
  addComponentToExistingComponentById,
}: ImagesCreatorProps) => {
  const [ImagesData, setImagesData] = useState<ImagesContent | undefined>(
    undefined
  );
  const [componentIndex, setComponentIndex] = useState<number | undefined>(
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
    setComponentIndex(imagesContentIndex);
    setImagesData(imagesContent);
  }, [componentList, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleDeleteImages = useCallback(
    (index: number) => {
      if (componentIndex === undefined) return;
      if (!ImagesData?.data) return;
      const copyComponentList = [...componentList];

      if (ImagesData?.data.length <= 1) {
        copyComponentList.splice(componentIndex, 1, undefined);
        setComponentList(copyComponentList);
        return;
      }

      const copyTextBoxesDataArr = [...ImagesData.data];
      copyTextBoxesDataArr.splice(index, 1);
      copyComponentList[componentIndex]!.content.data = copyTextBoxesDataArr;
      setComponentList(copyComponentList);
    },
    [ImagesData, componentList, componentIndex, setComponentList]
  );

  const addImages = useCallback(() => {
    if (!addComponentToExistingComponentById) return;
    addComponentToExistingComponentById("images", id);
  }, [addComponentToExistingComponentById, id]);

  const handleClickMode = useCallback(
    (optionName: keyof ImagesOptions) => {
      if (componentIndex === undefined) return;
      const copyComponentList = [...componentList];
      const content = copyComponentList[componentIndex]
        ?.content as ImagesContent;
      if (optionName === "isHorizontal") {
        content.options!.isHorizontal = !content.options?.isHorizontal;
      }
      setComponentList(copyComponentList);
    },
    [componentList, componentIndex, setComponentList]
  );

  const encodeFileToBase64 = useCallback(
    (fileBlob: Blob, contentIndex: number) => {
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
    [componentList, componentIndex, setComponentList]
  );

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
              contentIndex={index}
              encodeFileToBase64={encodeFileToBase64}
            />
          )}
          <ButtonCreator
            onClick={() => {
              handleDeleteImages(index);
            }}
          >
            삭제
          </ButtonCreator>
        </div>
      );
    });
  }, [ImagesData, handleDeleteImages, encodeFileToBase64]);

  return (
    <ImagesWrapper isHorizontal={ImagesData?.options?.isHorizontal}>
      {contents}
      <OptionButtonWrapper>
        <ButtonCreator onClick={() => handleClickMode("isHorizontal")}>
          {ImagesData?.options?.isHorizontal ? "가로모드" : "세로모드"}
        </ButtonCreator>
      </OptionButtonWrapper>
      <ButtonCreator onClick={addImages}>+</ButtonCreator>
    </ImagesWrapper>
  );
};

export default ImagesCreator;
