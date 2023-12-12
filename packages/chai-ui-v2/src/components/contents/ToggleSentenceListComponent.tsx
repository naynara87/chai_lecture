import React, { useCallback, useMemo, useState } from "react";
import { ToggleSentenceListContentData } from "../../core";
import { HtmlContentComponent } from "../atoms";
import { ComponentToggle } from "../molecules";

export interface ToggleSentenceListComponentProps {
  contents: ToggleSentenceListContentData;
}

const ToggleSentenceListComponent = ({
  contents,
}: ToggleSentenceListComponentProps) => {
  const [isShowPronunciation, setIsShowPronunciation] = useState(false);
  const [isShowMeaning, setIsShowMeaning] = useState(false);

  const handleClickPronunciationToggle = useCallback(() => {
    setIsShowPronunciation(!isShowPronunciation);
  }, [isShowPronunciation]);

  const handleClickMeaningToggle = useCallback(() => {
    setIsShowMeaning(!isShowMeaning);
  }, [isShowMeaning]);

  const mainContents = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      return (
        <li className="sentence" key={contentIndex}>
          <p className="chinese">
            <HtmlContentComponent html={content.text} />
          </p>
          {isShowPronunciation && (
            <p className="pinyin text">
              <HtmlContentComponent html={content.pronunciation} />
            </p>
          )}
          {isShowMeaning && (
            <p className="mean text">
              <HtmlContentComponent html={content.meaning} />
            </p>
          )}
        </li>
      );
    });
  }, [contents.data, isShowPronunciation, isShowMeaning]);

  return (
    <div className="toggle-text-wrapper">
      <ComponentToggle
        onClickPronunciationToggle={handleClickPronunciationToggle}
        onClickMeaningToggle={handleClickMeaningToggle}
        contents={contents}
      />
      <ul className="sentence-list-wrap">
        {/* 반복영역 */}
        {mainContents}
        {/* end 반복영역 */}
      </ul>
    </div>
  );
};

export default ToggleSentenceListComponent;
