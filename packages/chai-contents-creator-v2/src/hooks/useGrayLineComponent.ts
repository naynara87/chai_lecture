import {
  AllTemplateData,
  Content,
  ContentType,
  FinalSpeakingContentData,
  ID,
  MultiChoiceContentData,
  WordsInOrderContentData,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import { useCallback } from "react";
import { DropResult } from "react-beautiful-dnd";
import { getContentComponentsDefaultValue } from "../data/appData";
import { CommonTemplateComponentLocation } from "../types/page";

export type ExampleUseContent =
  | MultiChoiceContentData
  | WordsInOrderContentData
  | FinalSpeakingContentData;

interface UseGrayLineComponentProps {
  content: ExampleUseContent;
  currentSlide: AllTemplateData;
  updateContentToTemplate:
    | ((slideId: ID, updatedContent: ExampleUseContent) => void)
    | undefined;
}

const useGrayLineComponent = ({
  content,
  currentSlide,
  updateContentToTemplate,
}: UseGrayLineComponentProps) => {
  const addComponent = (contentType: ContentType) => {
    const addedContent = getContentComponentsDefaultValue()[contentType];

    if (!addedContent) return;

    const newContent = {
      ...content,
      data: {
        ...content.data,
        exampleContents: [
          ...content.data.exampleContents!,
          { ...addedContent },
        ],
      },
    } as ExampleUseContent;

    updateContentToTemplate &&
      updateContentToTemplate(currentSlide.id, newContent);
  };

  const updateComponent = useCallback(
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newContent = {
        ...content,
        data: {
          ...content.data,
          exampleContents: content.data.exampleContents!.map((component) => {
            if (component.id === contentId) {
              return updatedContent;
            }
            return component;
          }),
        },
      } as ExampleUseContent;
      updateContentToTemplate &&
        updateContentToTemplate(currentSlide.id, newContent);
    },
    [content, currentSlide.id, updateContentToTemplate],
  );

  const deleteComponent = useCallback(
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newContent = {
        ...content,
        data: {
          ...content.data,
          exampleContents: content.data.exampleContents!.filter(
            (component) => component.id !== contentId,
          ),
        },
      } as ExampleUseContent;

      updateContentToTemplate &&
        updateContentToTemplate(currentSlide.id, newContent);
    },
    [content, currentSlide.id, updateContentToTemplate],
  );

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }

      const newContent = cloneDeep(content);
      if (!newContent.data.exampleContents) return;
      const [removed] = newContent.data.exampleContents.splice(source.index, 1);
      newContent.data.exampleContents.splice(destination.index, 0, removed);

      updateContentToTemplate &&
        updateContentToTemplate(currentSlide.id, newContent);
    },
    [content, currentSlide.id, updateContentToTemplate],
  );

  return {
    addComponent,
    updateComponent,
    deleteComponent,
    handleOnDragEnd,
  };
};

export default useGrayLineComponent;
