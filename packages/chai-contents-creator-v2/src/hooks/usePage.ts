import {
  AllTemplateData,
  TemplateType,
  ContentType,
  ID,
  Content,
} from "chai-ui-v2";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import {
  getContentComponentsDefaultValue,
  getTemplateDefaultValue,
} from "../data/appData";
import { slidesState } from "../states/slidesState";
import {
  AddComponentMap,
  CommonTemplateComponentLocation,
} from "../types/page";
import cloneDeep from "lodash/cloneDeep";

const usePage = () => {
  // TODO gth 나중에 서버로 전송할 땐 slides가 2개 이상이면 MultiPage 타입으로 만들어서 전송해야한다
  const [slides, setSlides] = useRecoilState(slidesState);

  useEffect(() => {
    console.log("slides", slides);
  }, [slides]);

  const updateContent = useCallback(
    (
      slideId: ID,
      contentId: ID,
      position: CommonTemplateComponentLocation,
      updatedContent: Content,
    ) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide);
          // @ts-ignore
          newSlide[position] = newSlide[position].map((content: Content) => {
            if (content.id === contentId) {
              return updatedContent;
            }
            return content;
          });
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  /**
   * NOTE : componentLocation에 컴포넌트를 push
   * Template01
   * - contents
   * Template_H_3_7, Template_H_5_5
   * - leftContents, rightContents
   */
  const addComponentToCommonTemplate = useCallback(
    (
      slideId: ID,
      component: ContentType,
      componentLocation: "contents" | "leftContents" | "rightContents",
    ) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide);
          // @ts-ignore
          newSlide[componentLocation].push(
            getContentComponentsDefaultValue()[component],
          );
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const addComponentMap: AddComponentMap = useMemo(
    () => ({
      addComponentToCommonTemplate,
    }),
    [addComponentToCommonTemplate],
  );

  const addSlide = useCallback(() => {
    const newSlides = cloneDeep(slides);
    newSlides.push({
      id: newSlides.length,
      type: "Template01",
      contents: [],
    });
    setSlides(newSlides);
  }, [slides, setSlides]);

  const deleteSlide = useCallback(
    (slideId: ID) => {
      const newSlides = slides.filter((slide) => slide.id !== slideId);
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const handleChangeLayout = useCallback(
    (slideId: ID, templateType: TemplateType) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          return {
            ...getTemplateDefaultValue()[templateType],
          } as AllTemplateData;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  return {
    slides,
    addSlide,
    deleteSlide,
    handleChangeLayout,
    addComponentMap,
    updateContent,
  };
};

export default usePage;

export type ReturnUsePage = ReturnType<typeof usePage>;