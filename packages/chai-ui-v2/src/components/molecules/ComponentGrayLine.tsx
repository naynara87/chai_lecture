import React, { useMemo } from "react";
import { Content, useContentMapper } from "../../core";

interface ComponentGrayLineProps {
  contents: Content[];
  exampleContentsRef?: React.RefObject<HTMLDivElement>;
}

const ComponentGrayLine = ({
  contents,
  exampleContentsRef,
}: ComponentGrayLineProps) => {
  const { getContentComponent } = useContentMapper();

  const mainContents = useMemo(() => {
    return contents.map((content, contentIndex) => {
      return getContentComponent(content, contentIndex);
    });
  }, [contents, getContentComponent]);

  return (
    <div className="gray-line" ref={exampleContentsRef}>
      {mainContents}
    </div>
  );
};

export default ComponentGrayLine;
