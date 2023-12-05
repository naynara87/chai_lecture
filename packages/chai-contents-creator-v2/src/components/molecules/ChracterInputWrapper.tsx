import styled from "@emotion/styled";
import UrlInputWrapper from "./UrlInputWrapper";
import ImgProfileDefault from "chai-ui-v2/dist/assets/images/img/img_profile_default.png";

const ImgRound = styled.div`
  .btn-profile {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const CharacterWrap = styled.div`
  display: flex;
  gap: 3vmin;
`;

const CharacterNameInput = styled.input`
  background: none !important;
  font-size: var(--font-size-22) !important;

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
              <ImgRound className="img-round">
                <button className="btn-profile">
                  <img
                    src={characterImageSrc || ImgProfileDefault}
                    alt={characterName}
                  />
                </button>
              </ImgRound>
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
