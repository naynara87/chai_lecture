import { AllTemplateData, TemplateType, ContentType, ID } from "chai-ui-v2";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getContentComponentsDefaultValue,
  getTemplateDefaultValue,
} from "../data/appData";
import { AddComponentMap } from "../types/page";

const usePage = () => {
  // TODO gth 나중에 서버로 전송할 땐 slides가 2개 이상이면 MultiPage 타입으로 만들어서 전송해야한다
  const [slides, setSlides] = useState<AllTemplateData[]>([
    {
      id: 0,
      type: "Template01",
      contents: [
        // {
        //   type: "text",
        //   data: {
        //     text: "안녕하세요",
        //   },
        // },
      ],
    },
  ]);

  useEffect(() => {
    console.log("slides", slides);
  }, [slides]);

  /**
   * componentLocation에 컴포넌트를 push
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
          const newSlide = { ...slide };
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
    [slides],
  );

  const addComponentMap: AddComponentMap = useMemo(
    () => ({
      addComponentToCommonTemplate,
    }),
    [addComponentToCommonTemplate],
  );

  const addSlide = useCallback(() => {
    const newSlides = [...slides];
    newSlides.push({
      id: newSlides.length,
      type: "Template01",
      contents: [],
    });
    setSlides(newSlides);
  }, [slides]);

  const deleteSlide = useCallback(
    (slideId: ID) => {
      const newSlides = slides.filter((slide) => slide.id !== slideId);
      setSlides(newSlides);
    },
    [slides],
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
    [slides],
  );

  return {
    slides,
    addSlide,
    deleteSlide,
    handleChangeLayout,
    addComponentMap,
  };
};

export default usePage;
