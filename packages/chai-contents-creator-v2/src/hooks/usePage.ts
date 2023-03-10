import { AllTemplateData, TemplateType, ContentType } from "chai-ui-v2";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  contentComponentsDefaultValue,
  templateDefaultValue,
} from "../data/appData";
import { AddComponentMap } from "../types/page";

export type SlideType = AllTemplateData & {
  slideIndex: number;
};

const usePage = () => {
  // TODO gth 나중에 서버로 전송할 땐 slides가 2개 이상이면 MultiPage 타입으로 만들어서 전송해야한다
  const [slides, setSlides] = useState<SlideType[]>([
    {
      slideIndex: 0,
      type: "Template01",
      contents: [],
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
      slideIndex: number,
      component: ContentType,
      componentLocation: "contents" | "leftContents" | "rightContents",
    ) => {
      const newSlides = slides.map((slide) => {
        if (slide.slideIndex === slideIndex) {
          const newSlide = { ...slide };
          // @ts-ignore
          newSlide[componentLocation].push(
            contentComponentsDefaultValue[component],
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
      slideIndex: newSlides.length,
      type: "Template01",
      contents: [],
    });
    setSlides(newSlides);
  }, [slides]);

  const deleteSlide = useCallback(
    (slideIndex: number) => {
      const newSlides = slides.filter(
        (slide) => slide.slideIndex !== slideIndex,
      );
      setSlides(newSlides);
    },
    [slides],
  );

  const handleChangeLayout = useCallback(
    (slideIndex: number, templateType: TemplateType) => {
      const newSlides = slides.map((slide) => {
        if (slide.slideIndex === slideIndex) {
          return {
            slideIndex: slide.slideIndex,
            ...templateDefaultValue[templateType],
          } as SlideType;
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
