import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import ChooseTextCreator from "../../components/contents/createContent/ChooseTextCreator";
import TextBoxesCreator from "../../components/contents/createContent/TextBoxesCreator";
import { defaultContentComponentData } from "../../data/contentCreate/defaultContentComponentData";
import {
  contentLayoutState,
  contentLayoutStateType,
} from "../../state/createContent/contentLayoutState";
import { ApproveContent, Content } from "../../types/appData";
import uuid from "react-uuid";
import { pasteComponentState } from "../../state/createContent/pasteComponentState";

interface CopyContentObject {
  type: contentLayoutStateType | undefined;
  contents: (CreatorContent | undefined)[];
}

interface SaveContentObject {
  type: contentLayoutStateType["layoutName"] | undefined;
  contents: (Content | undefined)[];
}

export type CreatorContent = {
  id: string;
  content: Content;
};

const useCreateContent = () => {
  const [contentLayout, setContentLayout] = useRecoilState(contentLayoutState);
  const [pasteComponent, setPasteComponent] = useRecoilState(pasteComponentState);
  const [componentList, setComponentList] = useState<(CreatorContent | undefined)[]>([]);

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
        if (component === undefined) return component;
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
    (contentType: Content["type"], componentIndex: number) => {
      const newId = uuid();
      const newComponent = getDefaultContentComponent(contentType, newId);
      const copyComponentList = [...componentList];
      if (componentIndex !== undefined) {
        copyComponentList.splice(componentIndex, 1, newComponent);
        setComponentList(copyComponentList);
        return;
      }
    },
    [getDefaultContentComponent, componentList],
  );

  const copyContents = useCallback(() => {
    const contentObject: CopyContentObject = {
      type: contentLayout,
      contents: [],
    };
    componentList.forEach((component) => {
      contentObject.contents.push(component);
    });
    localStorage.setItem("contentObject", JSON.stringify(contentObject));
  }, [contentLayout, componentList]);

  const copyOnceContent = useCallback(
    (contentIndex: number) => {
      setPasteComponent(componentList[contentIndex]?.content);
    },
    [componentList, setPasteComponent],
  );

  const pasteContents = useCallback(() => {
    if (localStorage.getItem("contentObject")) {
      const getStorageObject = JSON.parse(localStorage.getItem("contentObject")!);
      const copyComponentList = [...componentList];
      copyComponentList.forEach((component, index) => {
        if (getStorageObject.contents[index] === null) {
          copyComponentList[index] = undefined;
        } else {
          copyComponentList[index] = getStorageObject.contents[index];
        }
      });
      setComponentList(copyComponentList);
    } else {
      alert("복사된 컴포넌트가 없습니다.");
    }
  }, [componentList]);

  const pasteOnceContent = useCallback(
    (contentIndex: number) => {
      const copyComponentList = [...componentList];
      const content = {
        id: uuid(),
        content: pasteComponent!,
      };
      copyComponentList[contentIndex] = content;
      setComponentList(copyComponentList);
    },
    [componentList, pasteComponent],
  );

  const saveContents = useCallback(() => {
    const saveObject: SaveContentObject = {
      type: contentLayout?.layoutName,
      contents: [],
    };
    componentList.forEach((component) => {
      saveObject.contents.push(component?.content);
    });
    console.log(saveObject);
  }, [contentLayout, componentList]);

  const getPreviewObject = useCallback(() => {
    const previewObject = {
      id: 0,
      title: "",
      description: "",
      template: {
        type: contentLayout?.layoutName!,
        contents: [] as ApproveContent[],
      },
    };
    componentList.forEach((component) => {
      previewObject.template.contents.push(component?.content! as ApproveContent);
    });
    return previewObject;
  }, [componentList, contentLayout]);

  const deleteOnceContent = useCallback(
    (contentIndex: number) => {
      const copyComponentList = [...componentList];
      copyComponentList.splice(contentIndex, 1, undefined);
      setComponentList(copyComponentList);
    },
    [componentList],
  );

  return {
    getCreateContentComponent,
    getDefaultContentComponent,
    componentNames,
    contentLayout,
    setContentLayout,
    components,
    componentList,
    copyContents,
    copyOnceContent,
    pasteContents,
    pasteOnceContent,
    saveContents,
    deleteOnceContent,
    setComponentList,
    getPreviewObject,
    addNewComponent,
    addComponentToExistingComponentById,
  };
};

export default useCreateContent;
