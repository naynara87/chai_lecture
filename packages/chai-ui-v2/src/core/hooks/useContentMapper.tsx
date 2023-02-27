import React from "react";
import { ComponentVideo } from "../../components";
import { Content, ContentType } from "../types";

const useContentMapper = () => {
  const getContentComponent = (content: Content, contentIndex: number) => {
    const contentMapper: Record<ContentType, JSX.Element> = {
      video: <ComponentVideo content={content} key={contentIndex} />,
    };

    return contentMapper[content.type];
  };

  return {
    getContentComponent,
  };
};

export default useContentMapper;
