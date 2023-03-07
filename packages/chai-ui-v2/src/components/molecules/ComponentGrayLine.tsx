import React, { useMemo } from "react";
import { Content, useContentMapper } from "../../core";

interface ComponentGrayLineProps {
  contents: Content[];
}

const ComponentGrayLine = ({ contents }: ComponentGrayLineProps) => {
  const { getContentComponent } = useContentMapper();

  const mainContents = useMemo(() => {
    return contents.map((content, contentIndex) => {
      return getContentComponent(content, contentIndex);
    });
  }, [contents, getContentComponent]);

  return <div className="gray-line">{mainContents}</div>;
};

export default ComponentGrayLine;
