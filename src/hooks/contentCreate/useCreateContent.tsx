import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import ChooseTextCreator from "../../components/contents/createContent/ChooseTextCreator";
import TextBoxesCreator from "../../components/contents/createContent/TextBoxesCreator";
import { defaultContentComponentData } from "../../data/contentCreate/defaultContentComponentData";
import { contentLayoutState } from "../../state/createContent/contentLayoutState";
import { Content } from "../../types/appData";
import { TextBoxesContent } from "../../types/templateContents";
import uuid from "react-uuid";

export type CreatorContent = {
  id: string;
  content: Content;
};

const useCreateContent = () => {
  const [contentLayout, setContentLayout] = useRecoilState(contentLayoutState);
  const [componentList, setComponentList] = useState<CreatorContent[]>([]);

  useEffect(() => {
    console.log("componentList", componentList);
  }, [componentList]);

  const getCreateContentComponent = useCallback((content: Content, key?: string) => {
    const contentCreatorMapper: Partial<Record<Content["type"], JSX.Element | JSX.Element[]>> = {
      // TODO: 저작도구용 컴포넌트 만들기(현재 보여지는 것은 뷰잉용)
      // chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      // textBoxes: <TextBoxesAdapter content={content as TextBoxesContent} />,
      chooseText: <ChooseTextCreator key={key} />,
      textBoxes: (
        <TextBoxesCreator
          key={key}
          content={content as TextBoxesContent}
          onSave={() => console.log("save")}
        />
      ),
    };

    return contentCreatorMapper[content.type];
  }, []);

  const getDefaultContentComponent = useCallback((contentType: Content["type"], id: string) => {
    return {
      id,
      content: { type: contentType, data: defaultContentComponentData[contentType] },
    } as CreatorContent;
  }, []);

  const componentNames = Object.keys(defaultContentComponentData) as Content["type"][];

  const components = useMemo(() => {
    const _components = componentList.map((contentData, listIndex) => {
      // NOTE : content data가 여러개 인 경우엔 렌더링 하는 컴포넌트에서 처리
      return getCreateContentComponent(
        contentData.content,
        `${contentData.content.type}_${listIndex}`,
      );
    });
    return _components;
  }, [componentList, getCreateContentComponent]);

  const addComponentToExistingComponentById = useCallback(
    (contentType: Content["type"], id: string) => {
      const newComponent = getDefaultContentComponent(contentType, id);
      const addedComponentList = componentList.map((component) => {
        if (component.id === id) {
          return {
            ...component,
            content: {
              ...component.content,
              data: [...component.content.data, ...newComponent.content.data],
            },
          } as CreatorContent;
        }
        return component;
      });
      setComponentList(addedComponentList);
    },
    [getDefaultContentComponent, componentList],
  );

  const addNewComponent = useCallback(
    (contentType: Content["type"]) => {
      const newId = uuid();
      const newComponent = getDefaultContentComponent(contentType, newId);
      setComponentList((prev) => {
        return [...prev, newComponent];
      });
    },
    [getDefaultContentComponent],
  );

  return {
    getCreateContentComponent,
    getDefaultContentComponent,
    componentNames,
    contentLayout,
    setContentLayout,
    components,
    addNewComponent,
    addComponentToExistingComponentById,
  };
};

export default useCreateContent;
