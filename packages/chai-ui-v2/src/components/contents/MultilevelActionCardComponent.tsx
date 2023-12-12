import React, { useCallback, useMemo, useState } from "react";
import { MultilevelActionCardContentData } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";
import ComponentButtonStep from "../atoms/Button/ComponentButtonStep";

export interface MultilevelActionCardComponentProps {
  contents: MultilevelActionCardContentData;
}

/**
 * CH-03-02-01 액션 학습 카드 - 단어용
 */
const MultilevelActionCardComponent = ({
  contents,
}: MultilevelActionCardComponentProps) => {
  const [step, setStep] = useState(0);
  const { getContentComponent } = useContentMapper();

  const multiLevelContents = useMemo(() => {
    return contents.data.map((contents, contentsIndex) => {
      if (contentsIndex <= step) {
        return contents.map((content, contentIndex) => {
          return getContentComponent(content, contentIndex);
        });
      } else {
        return <></>;
      }
    });
  }, [contents.data, getContentComponent, step]);

  const handleClickStepButton = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  return (
    <div className="step-card-wrap">
      <div className={`step-card new-step-card action-card step${step + 1}`}>
        <>{multiLevelContents}</>
        {contents.data[step + 1] && (
          <div>
            <ComponentButtonStep onClick={handleClickStepButton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultilevelActionCardComponent;
