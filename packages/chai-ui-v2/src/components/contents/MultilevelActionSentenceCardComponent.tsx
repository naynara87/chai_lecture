import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { vw } from "../../assets";
import { MultilevelActionSentenceCardContentData } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";
import ComponentButtonStep from "../atoms/Button/ComponentButtonStep";

const StepCard = styled.div`
  > *:not(:first-child) {
    margin-top: ${vw(40)};
  }
`;

export interface MultilevelActionSentenceCardComponentProps {
  contents: MultilevelActionSentenceCardContentData;
}

const MultilevelActionSentenceCardComponent = ({
  contents,
}: MultilevelActionSentenceCardComponentProps) => {
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
      <StepCard className={`step-card sentence-card step${step + 1}`}>
        <>{multiLevelContents}</>
        {contents.data[step + 1] && (
          <ComponentButtonStep onClick={handleClickStepButton} />
        )}
      </StepCard>
    </div>
  );
};

export default MultilevelActionSentenceCardComponent;
