import React, { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import ChooseTextCreator from "../../components/contents/createContent/ChooseTextCreator";
import TextBoxesCreator from "../../components/contents/createContent/TextBoxesCreator";
import { defaultContentComponentData } from "../../data/contentCreate/defaultContentComponentData";
import { contentLayoutState } from "../../state/createContent/contentLayoutState";
import { Content } from "../../types/appData";

const useCreateContentMapper = () => {
  const [contentLayout, setContentLayout] = useRecoilState(contentLayoutState);
  const [componentList, setComponentList] = useState<Content[]>([]);

  const getCreateContentComponent = useCallback((content: Content, key?: string) => {
    const contentCreatorMapper: Partial<Record<Content["type"], JSX.Element | JSX.Element[]>> = {
      // TODO: 저작도구용 컴포넌트 만들기(현재 보여지는 것은 뷰잉용)
      // chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      // textBoxes: <TextBoxesAdapter content={content as TextBoxesContent} />,
      chooseText: <ChooseTextCreator key={key} />,
      textBoxes: <TextBoxesCreator key={key} />,
    };

    return contentCreatorMapper[content.type];
  }, []);

  const getDefaultContentComponent = useCallback((contentType: Content["type"]) => {
    return { type: contentType, data: defaultContentComponentData[contentType] } as Content;
  }, []);

  const componentNames = Object.keys(defaultContentComponentData) as Content["type"][];

  const components = useMemo(() => {
    return componentList.flatMap((content, listIndex) => {
      const Components = content.data.map((_, dataIndex) =>
        getCreateContentComponent(content, `${content.type}_${listIndex}_${dataIndex}`),
      );
      // TODO: data에 여러개가 있다면 여러개를 표시
      return Components;
    });
  }, [componentList, getCreateContentComponent]);

  const addComponentToExistingComponent = useCallback(
    (contentType: Content["type"]) => {
      const newComponent = getDefaultContentComponent(contentType);
      setComponentList((prev) => {
        // 같은 컴포넌트가 있는 경우
        const sameComponent = prev.find((component) => component.type === newComponent.type);
        if (sameComponent) {
          return prev.map((component) => {
            if (component.type === sameComponent.type) {
              return {
                ...component,
                data: [...component.data, ...newComponent.data],
              } as Content;
            }
            return component;
          });
        }

        // 같은 컴포넌트가 없을 경우
        return [...prev, newComponent];
      });
    },
    [getDefaultContentComponent],
  );

  const addNewComponent = useCallback(
    (contentType: Content["type"]) => {
      const newComponent = getDefaultContentComponent(contentType);
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
    addComponentToExistingComponent,
    addNewComponent,
  };
};

export default useCreateContentMapper;
