import { TemplateType } from "chai-ui-v2";
import { useCallback, useState } from "react";

export type TestSlideType = {
  slideIndex: number;
  templateType: TemplateType;
};

const usePage = () => {
  // TODO gth 나중에 서버로 전송할 땐 slides가 2개 이상이면 MultiPage 타입으로 만들어서 전송해야한다
  // const [slides, setSlides] = useState<AllTemplateData[]>([]);
  const [slides, setSlides] = useState<TestSlideType[]>([
    {
      slideIndex: 0,
      templateType: "Template01",
    },
  ]);

  const addSlide = useCallback(() => {
    const newSlides = [...slides];
    newSlides.push({
      slideIndex: newSlides.length,
      templateType: "Template01",
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
            ...slide,
            templateType,
          };
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
  };
};

export default usePage;
