import React, { useCallback } from "react";
import ChooseText from "../../components/contents/ChooseText";
import TextBoxesAdapter from "../../components/contents/TextBoxesAdapter";
import { defaultContentComponentData } from "../../data/contentCreate/defaultContentComponentData";
import { Content } from "../../types/appData";
import { ChooseTextContent, TextBoxesContent } from "../../types/templateContents";

const useCreateContentMapper = () => {
  const getCreateContentComponent = useCallback((content: Content) => {
    const createContentMapper: Partial<Record<Content["type"], JSX.Element | JSX.Element[]>> = {
      // TODO: 저작도구용 컴포넌트 만들기(현재 보여지는 것은 뷰잉용)
      chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      textBoxes: <TextBoxesAdapter content={content as TextBoxesContent} />,
    };

    return createContentMapper[content.type];
  }, []);

  const getDefaultContentComponent = useCallback((contentType: Content["type"]) => {
    return { type: contentType, data: defaultContentComponentData[contentType] } as Content;
  }, []);

  const componentNames = Object.keys(defaultContentComponentData) as Content["type"][];

  return { getCreateContentComponent, getDefaultContentComponent, componentNames };
};

export default useCreateContentMapper;
