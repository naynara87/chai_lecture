import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { vw } from "../../assets";
import { MultilevelActionCardContentData } from "../../core";
import useContentMapper from "../../core/hooks/useContentMapper";
import ComponentButtonStep from "../atoms/Button/ComponentButtonStep";

const StepCard = styled.div`
  > *:not(:first-of-type) {
    margin-top: ${vw(40)};
  }

  .image-with-caption-wrapper {
    img {
      width: 100%;
      height: auto;
      max-width: 200px;
      max-height: 150px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }

    .caption-wrap {
      width: 100%;
      max-width: 200px;
    }
  }

  p,
  span {
    line-height: 1 !important;
  }
`;

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
      <StepCard className={`step-card step${step + 1}`}>
        <>{multiLevelContents}</>
        {contents.data[step + 1] && (
          <div>
            <ComponentButtonStep onClick={handleClickStepButton} />
          </div>
        )}
      </StepCard>
    </div>
  );
};

export default MultilevelActionCardComponent;
