import styled from "@emotion/styled";
import { Content } from "chai-ui-v2";

import { v4 as uuidV4 } from "uuid";

const ToggleWrapper = styled.div`
  .inp-toggle-wrap {
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .toggle-name {
    font-size: 16px;
    line-height: 28px;
  }

  .toggle-label {
    width: 50px;
    height: 28px;
    margin-left: 10px;

    &:after {
      width: 20px;
      height: 20px;
      left: 4px;
    }
  }

  .toggle-input:checked ~ .toggle-label:after {
    left: calc(100% - 24px);
  }
`;

export interface ToggleSentenceListComponentProps {
  contents: Content;
}

const TogglesWrapper = ({ contents }: ToggleSentenceListComponentProps) => {
  return (
    <ToggleWrapper className="toggle-wrapper">
      <div className="inp-toggle-wrap">
        <span className="toggle-name">한어병음</span>
        <input
          type="checkbox"
          name="input1"
          id={`${contents.id}-input1`}
          className="toggle-input none"
        />
        <label htmlFor={`${contents.id}-input1`} className="toggle-label">
          보이기
        </label>
      </div>

      <div className="inp-toggle-wrap">
        <span className="toggle-name">해석</span>
        <input
          type="checkbox"
          name="input2"
          id={`${contents.id}-input2`}
          className="toggle-input none"
        />
        <label htmlFor={`${contents.id}-input2`} className="toggle-label">
          보이기
        </label>
      </div>
    </ToggleWrapper>
  );
};

export default TogglesWrapper;
