import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import uuid from "react-uuid";
import {
  contentLayoutState,
  contentLayoutStateType,
} from "../states/contentLayoutState";
import { ApproveContent, Content, useToast } from "chai-ui";
import { pasteComponentState } from "../states/pasteComponentState";
import { defaultContentComponentData } from "../data/defaultContentComponentData";
import ChooseTextCreator from "../components/contents/ChooseTextCreator";
import TextBoxesCreator from "../components/contents/TextBoxesCreator";
import ImagesCreator from "../components/contents/ImageCreator";
import ChooseTextByAudioCreator from "../components/contents/ChooseTextByAudioCreator";

interface CopyContentObject {
  type: contentLayoutStateType | undefined;
  contents: (CreatorContent | undefined)[];
}

interface SaveContentObject {
  type: contentLayoutStateType["layoutName"] | undefined;
  contents: (Content | undefined)[];
}

export interface ContentProps {
  onSave: () => void;
  id: string;
  componentList: (CreatorContent | undefined)[];
  setComponentList: React.Dispatch<
    React.SetStateAction<(CreatorContent | undefined)[]>
  >;
  addComponentToExistingComponentById?: (
    contentType: Content["type"],
    id: string
  ) => void;
  handleFocusHtml?: (id?: string, type?: string, index?: number) => void;
  focusEditor?: string;
}

export type CreatorContent = {
  id: string;
  content: Content;
};

export interface useCreateContentProps {
  focusEditor?: string;
  handleFocusHtml?: (id?: string, type?: string, index?: number) => void;
}

const useCreateContent = ({
  handleFocusHtml,
  focusEditor,
}: useCreateContentProps) => {
  const [contentLayout, setContentLayout] = useRecoilState(contentLayoutState);
  const [pasteComponent, setPasteComponent] =
    useRecoilState(pasteComponentState);
  const [componentList, setComponentList] = useState<
    (CreatorContent | undefined)[]
  >([]);
  const { addToast } = useToast();

  useEffect(() => {
    console.log("componentList", componentList);
  }, [componentList]);

  const getDefaultContentComponent = useCallback(
    (contentType: Content["type"], id: string) => {
      return {
        id,
        content: {
          type: contentType,
          data: defaultContentComponentData[contentType],
          options: {},
        },
      } as CreatorContent;
    },
    []
  );

  const addComponentToExistingComponentById = useCallback(
    (contentType: Content["type"], id: string) => {
      const newComponent = getDefaultContentComponent(contentType, id);
      const addedComponentList = componentList.map((component) => {
        if (component === undefined || component === null) return component;
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
    [getDefaultContentComponent, componentList]
  );

  const componentNames = Object.keys(
    defaultContentComponentData
  ) as Content["type"][];

  const getCreateContentComponent = useCallback(
    (content: Content, key: string) => {
      const contentProps: ContentProps = {
        onSave: () => console.log("save"),
        id: key,
        componentList,
        setComponentList,
        handleFocusHtml,
        addComponentToExistingComponentById,
        focusEditor,
      };
      const contentCreatorMapper: Partial<
        Record<Content["type"], JSX.Element | JSX.Element[]>
      > = {
        // TODO: 저작도구용 컴포넌트 만들기(현재 보여지는 것은 뷰잉용)
        chooseTextByAudio: (
          <ChooseTextByAudioCreator key={key} {...contentProps} />
        ),
        chooseText: <ChooseTextCreator key={key} {...contentProps} />,
        textBoxes: <TextBoxesCreator key={key} {...contentProps} />,
        images: <ImagesCreator key={key} {...contentProps} />,
      };

      return contentCreatorMapper[content.type];
    },
    [
      addComponentToExistingComponentById,
      componentList,
      focusEditor,
      handleFocusHtml,
    ]
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
    [getDefaultContentComponent, componentList]
  );

  const copyContents = useCallback(() => {
    const isNullComponent = componentList.every((component) => {
      return component === undefined;
    });
    if (isNullComponent) {
      addToast("복사할 컴포넌트가 없습니다.", "error");
      return;
    }
    const contentObject: CopyContentObject = {
      type: contentLayout,
      contents: [],
    };
    componentList.forEach((component) => {
      contentObject.contents.push(component);
    });
    localStorage.setItem("contentObject", JSON.stringify(contentObject));
    addToast("전체 컴포넌트가 복사되었습니다.", "success");
  }, [contentLayout, componentList, addToast]);

  const copyOnceContent = useCallback(
    (contentIndex: number) => {
      setPasteComponent(componentList[contentIndex]?.content);
      addToast("해당 컴포넌트가 복사되었습니다.", "success");
    },
    [componentList, setPasteComponent, addToast]
  );

  const pasteContents = useCallback(() => {
    if (localStorage.getItem("contentObject")) {
      const getStorageObject = JSON.parse(
        localStorage.getItem("contentObject")!
      );
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
      addToast("복사된 컴포넌트가 없습니다.", "error");
    }
  }, [componentList, addToast]);

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
    [componentList, pasteComponent]
  );

  const saveContents = useCallback(() => {
    const saveObject: SaveContentObject = {
      type: contentLayout?.layoutName,
      contents: [],
    };
    componentList.forEach((component) => {
      saveObject.contents.push(component?.content);
    });
  }, [contentLayout, componentList]);

  const getPreviewObject = useCallback(() => {
    const previewObject = {
      id: 0,
      title: "",
      description: "",
      template: {
        type: contentLayout?.layoutName!,
        contents: [] as ApproveContent[],
        options: {},
      },
    };
    componentList.forEach((component) => {
      previewObject.template.contents.push(
        component?.content! as ApproveContent
      );
      if (component?.content?.options) {
        previewObject.template.options = component?.content?.options;
      }
    });
    return previewObject;
  }, [componentList, contentLayout]);

  const deleteOnceContent = useCallback(
    (contentIndex: number) => {
      const copyComponentList = [...componentList];
      copyComponentList.splice(contentIndex, 1, undefined);
      setComponentList(copyComponentList);
    },
    [componentList]
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
