import {
  IconTextContentData,
  ID,
  TemplateRolePlayingData,
  RolePlayingContentItem,
  ActivityGuideCharacterContentData,
} from "chai-ui-v2";
import { cloneDeep } from "lodash";
import usePage from "./usePage";

const useRolePlaying = (slideId: ID) => {
  const { slides, setSlides } = usePage();
  const thisSlide = slides.find(
    (slide) => slide.id === slideId,
  ) as TemplateRolePlayingData;

  const updateIconText = (updatedContent: IconTextContentData) => {
    const newSlides = slides.map((slide) => {
      if (slide.id === slideId) {
        const newSlide = cloneDeep(slide) as TemplateRolePlayingData;
        newSlide.iconText = updatedContent;
        return newSlide;
      }
      return slide;
    });
    setSlides(newSlides);
  };

  const updateRolePlayingContents = (
    updatedRolePlayingContents: RolePlayingContentItem[],
  ) => {
    const newSlides = slides.map((slide) => {
      if (slide.id === slideId) {
        const newSlide = cloneDeep(slide) as TemplateRolePlayingData;
        newSlide.rolePlayingContents.data = updatedRolePlayingContents;
        return newSlide;
      }
      return slide;
    });
    setSlides(newSlides);
  };

  const updateGuideContent = (
    updatedGuideContent: ActivityGuideCharacterContentData,
  ) => {
    const newSlides = slides.map((slide) => {
      if (slide.id === slideId) {
        const newSlide = cloneDeep(slide) as TemplateRolePlayingData;
        newSlide.guideContent = updatedGuideContent;
        return newSlide;
      }
      return slide;
    });
    setSlides(newSlides);
  };

  return {
    thisSlide,
    updateIconText,
    updateRolePlayingContents,
    updateGuideContent,
  };
};

export default useRolePlaying;
