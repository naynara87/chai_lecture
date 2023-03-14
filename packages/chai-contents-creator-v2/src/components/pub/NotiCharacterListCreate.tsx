import styled from "@emotion/styled";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import iconPlay from "chai-ui-v2/dist/assets/images/icon/icon_contsinfo_tail.svg";
import ImageIcon from "../../assets/images/icon/icon_image_with_bg.svg";
import TempProgile01 from "../../assets/images/img/cha_profile01.png";
import TempProgile02 from "../../assets/images/img/temp_profile01.png";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { colorPalette } from "chai-ui-v2";

const NotiCharacterWrapper = styled.div``;

const NotiCharacterWrap = styled.div`
  position: relative;
  display: inline-block;

  &:not(:first-child) {
    margin-left: 50px;
  }

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: -5px;
    left: auto;
    right: -5px;
  }
`;

const TextBubbleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 420px;
  min-height: 150px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colorPalette.gray300};
  margin-bottom: 53px;
  white-space: pre-line;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38px;
    height: 37px;
    background-image: url("${iconPlay}");
    background-size: 100% 100%;
    transform: translateX(-50%);
  }
`;

const ImageThumb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotiCharacterListCreate = () => {
  return (
    <ContentCreatorLayout>
      <NotiCharacterWrapper>
        {/* 반복영역 */}
        <NotiCharacterWrap>
          <ObjectDeleteButton />
          <TextBubbleWrap>{`텍스트를 입력해주세요.`}
          </TextBubbleWrap>
          <ImageThumb>
            {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
            <img src={TempProgile01} alt="캐릭터 프로필" />
          </ImageThumb>
          <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
        </NotiCharacterWrap>
        {/* end 반복영역 */}
        <NotiCharacterWrap>
          <ObjectDeleteButton />
          <TextBubbleWrap>{`텍스트를 입력해주세요.`}
          </TextBubbleWrap>
          <ImageThumb>
            {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
            <img src={TempProgile02} alt="캐릭터 프로필" />
          </ImageThumb>
          <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
        </NotiCharacterWrap>
        <NotiCharacterWrap>
          <ObjectDeleteButton />
          <TextBubbleWrap>{`텍스트를 입력해주세요.`}
          </TextBubbleWrap>
          <ImageThumb>
            {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
            <img src={ImageIcon} alt="캐릭터 프로필" />
          </ImageThumb>
          <UrlInputWrapper typeText="이미지"></UrlInputWrapper>
        </NotiCharacterWrap>
      </NotiCharacterWrapper>
    </ContentCreatorLayout>
  );
};

export default NotiCharacterListCreate;
