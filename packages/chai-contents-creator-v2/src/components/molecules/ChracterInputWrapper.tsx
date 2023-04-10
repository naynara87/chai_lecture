import styled from "@emotion/styled";
import { vw } from "chai-ui-v2";
import UrlInputWrapper from "./UrlInputWrapper";

const CharacterWrap = styled.div`
  display: flex;
`;

const CharacterNameInput = styled.input`
  background: none !important;
  font-size: ${vw(25)} !important;

  &::placeholder {
    opacity: 0.6;
  }
`;

const ConversationWrap = styled.div`
  margin-top: 0 !important;
`;

interface CharacterInputWrapperProps {
  characterImageSrc: string;
  characterName: string;
  characterSetName: (name: string) => void;
  characterSetImage: (src: string) => void;
}

const CharacterInputWrapper = ({
  characterImageSrc,
  characterName,
  characterSetName,
  characterSetImage,
}: CharacterInputWrapperProps) => {
  return (
    <ConversationWrap className="conversation-wrap">
      <div className="quiz-sentence-wrap">
        <CharacterWrap>
          <div className="img-grp">
            <div className="img-wrap">
              {/* TODO: key설명 - 음성이 있을 경우, 누르면 단일 음성이 재생되며, conversation-wrap 에 active 추가 */}
              <div className="img-round">
                <button className="btn-profile">
                  <img src={characterImageSrc} alt={characterName} />
                </button>
              </div>
            </div>
            <CharacterNameInput
              type="text"
              className="name"
              placeholder="화자 이름"
              onBlur={(e) => {
                const target = e.target as HTMLInputElement;
                characterSetName(target.value);
              }}
              defaultValue={characterName}
            />
          </div>
          <UrlInputWrapper typeText="이미지" onSubmit={characterSetImage} />
        </CharacterWrap>
      </div>
    </ConversationWrap>
  );
};

export default CharacterInputWrapper;
