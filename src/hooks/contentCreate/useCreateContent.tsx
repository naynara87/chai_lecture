import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import ChooseTextCreator from "../../components/contents/createContent/ChooseTextCreator";
import TextBoxesCreator from "../../components/contents/createContent/TextBoxesCreator";
import { defaultContentComponentData } from "../../data/contentCreate/defaultContentComponentData";
import { contentLayoutState } from "../../state/createContent/contentLayoutState";
import { Content } from "../../types/appData";
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

  const getDefaultContentComponent = useCallback((contentType: Content["type"], id: string) => {
    return {
      id,
      content: { type: contentType, data: defaultContentComponentData[contentType] },
    } as CreatorContent;
  }, []);

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
      console.log("newComponent", componentList);
    },
    [getDefaultContentComponent, componentList],
  );

  const componentNames = Object.keys(defaultContentComponentData) as Content["type"][];

  const getCreateContentComponent = useCallback(
    (content: Content, key: string) => {
      const contentCreatorMapper: Partial<Record<Content["type"], JSX.Element | JSX.Element[]>> = {
        // TODO: 저작도구용 컴포넌트 만들기(현재 보여지는 것은 뷰잉용)
        chooseText: (
          <ChooseTextCreator
            key={key}
            id={key}
            onSave={() => console.log("save")}
            addComponentToExistingComponentById={addComponentToExistingComponentById}
            componentList={componentList}
            setComponentList={setComponentList}
          />
        ),
        textBoxes: (
          <TextBoxesCreator
            key={key}
            id={key}
            onSave={() => console.log("save")}
            addComponentToExistingComponentById={addComponentToExistingComponentById}
            componentList={componentList}
            setComponentList={setComponentList}
          />
        ),
      };

      return contentCreatorMapper[content.type];
    },
    [addComponentToExistingComponentById, componentList],
  );

  const components = useMemo(() => {
    const _components = componentList.map((contentData) => {
      // NOTE : content data가 여러개 인 경우엔 렌더링 하는 컴포넌트에서 처리
      if (!contentData) {
        return undefined;
      }
      return getCreateContentComponent(contentData.content, contentData.id);
    });
    return _components;
  }, [componentList, getCreateContentComponent]);

  const addNewComponent = useCallback(
    (contentType: Content["type"], componentIndex?: number) => {
      const newId = uuid();
      const newComponent = getDefaultContentComponent(contentType, newId);
      const copyComponentList = JSON.parse(JSON.stringify(componentList));
      if (componentIndex !== undefined) {
        for (let i = 0; i < componentIndex; i++) {
          if (!copyComponentList[i]) {
            copyComponentList[i] = undefined;
          }
        }
        copyComponentList.splice(componentIndex, 1, newComponent);
        setComponentList(copyComponentList);
        return;
      }
      if (componentList.includes(undefined!) || componentList.includes(null!)) {
        componentList.forEach((component, index) => {
          if (component === undefined || component === null) {
            copyComponentList.splice(index, 1, newComponent);
            setComponentList(copyComponentList);
            return;
          }
        });
        return;
      }
      setComponentList((prev) => {
        return [...prev, newComponent];
      });
    },
    [getDefaultContentComponent, componentList],
  );

  return {
    getCreateContentComponent,
    getDefaultContentComponent,
    componentNames,
    contentLayout,
    setContentLayout,
    components,
    componentList,
    addNewComponent,
    addComponentToExistingComponentById,
  };
};

export default useCreateContent;
