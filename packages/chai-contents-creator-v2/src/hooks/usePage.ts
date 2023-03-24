import {
  AllTemplateData,
  TemplateType,
  ContentType,
  ID,
  Content,
  LocalStorage,
  Page,
  PageIntroduction,
  TemplateQuizMultiChoiceData,
  MultiChoiceContentData,
  WordsInOrderContentData,
  TemplateQuizWordsInOrderData,
  QuizSentenceContentData,
  TemplateQuizSentencesInOrderData,
  FinalSpeakingContentData,
  TemplateQuizSpeakingData,
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
import { DropResult } from "react-beautiful-dnd";
import { PAGE_DATA_KEY } from "../constants/storage";
import { pageState } from "../states/pageState";
import { ExampleUseContent } from "./useGrayLineComponent";

const usePage = () => {
  const [slides, setSlides] = useRecoilState(slidesState);
  const [pageData, setPageData] = useRecoilState(pageState);

  const saveIntroductionModalData = (data: PageIntroduction) => {
    const newPageData = cloneDeep(pageData);
    newPageData.introduction = data;
    setPageData(newPageData);
  };

  useEffect(() => {
    console.log("slides", slides);
  }, [slides]);

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      const [sourceSlideId, _startArea] = source.droppableId.split("_");
      const sourceArea = _startArea as CommonTemplateComponentLocation;
      const [endSlideId, _endArea] = destination.droppableId.split("_");
      const endArea = _endArea as CommonTemplateComponentLocation;

      if (sourceSlideId !== endSlideId) {
        // 다른 슬라이드로 이동은 허용하지 않음
        return;
      }

      const newSlides = slides.map((slide) => {
        if (slide.id.toString() === sourceSlideId) {
          const newSlide = cloneDeep(slide);
          // @ts-ignore
          const sourceContents = newSlide[sourceArea] as Content[];
          const [removed] = sourceContents.splice(source.index, 1);
          // @ts-ignore
          const destinationContents = newSlide[endArea] as Content[];
          destinationContents.splice(destination.index, 0, removed);
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

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

  const updateContentToMultiChoiceTemplate = useCallback(
    (slideId: ID, updatedContent: ExampleUseContent) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide) as TemplateQuizMultiChoiceData;
          newSlide["multiChoice"] = updatedContent as MultiChoiceContentData;
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const updateContentToWordsInOrderTemplate = useCallback(
    (slideId: ID, updatedContent: ExampleUseContent) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide) as TemplateQuizWordsInOrderData;
          newSlide["wordsInOrder"] = updatedContent as WordsInOrderContentData;
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const updateContentToSentenceInOrderTemplate = useCallback(
    (slideId: ID, updatedContent: QuizSentenceContentData) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide) as TemplateQuizSentencesInOrderData;
          newSlide["mainContents"] = updatedContent;
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const updateContentToFinalSpeakingTemplate = useCallback(
    (slideId: ID, updatedContent: ExampleUseContent) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide) as TemplateQuizSpeakingData;
          newSlide["rightContents"] =
            updatedContent as FinalSpeakingContentData;
          return newSlide;
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides, setSlides],
  );

  const deleteContent = useCallback(
    (slideId: ID, contentId: ID, position: CommonTemplateComponentLocation) => {
      const newSlides = slides.map((slide) => {
        if (slide.id === slideId) {
          const newSlide = cloneDeep(slide);
          // @ts-ignore
          newSlide[position] = newSlide[position] //
            .filter((content: Content) => content.id !== contentId);
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

  const pagePreviewData = useMemo(() => {
    const page: Page = {
      id: "preview_page",
      name: "미리보기",
      type: slides.length > 1 ? "multiPage" : "singlePage",
      data: slides.length > 1 ? slides : slides?.[0],
      introduction: pageData.introduction,
    } as Page;
    return page;
  }, [slides, pageData]);

  const savePageDataToLocalStorage = useCallback(() => {
    LocalStorage.setItem(PAGE_DATA_KEY, pagePreviewData);
  }, [pagePreviewData]);

  const getPageDataFromLocalStorage = useCallback(() => {
    const page = LocalStorage.getItem<Page>(PAGE_DATA_KEY);
    return page;
  }, []);

  const removePageDataFromLocalStorage = useCallback(() => {
    LocalStorage.removeItem(PAGE_DATA_KEY);
  }, []);

  return {
    slides,
    setSlides,
    addSlide,
    deleteSlide,
    handleChangeLayout,
    addComponentMap,
    updateContent,
    handleOnDragEnd,
    savePageDataToLocalStorage,
    getPageDataFromLocalStorage,
    removePageDataFromLocalStorage,
    deleteContent,
    pageData,
    saveIntroductionModalData,
    updateContentToMultiChoiceTemplate,
    updateContentToWordsInOrderTemplate,
    updateContentToSentenceInOrderTemplate,
    updateContentToFinalSpeakingTemplate,
  };
};

export default usePage;

export type ReturnUsePage = ReturnType<typeof usePage>;
