# 일부 컴포넌트는 에디터에서 컴포넌트 변경 못하게 하기

## 템플릿 별 컴포넌트 데이터 키

- 접근 방법

  - content_data -> JSON.parse() -> data 순회 -> 아래 템플릿 별 키로 접근

- Template01

  - contents => Array 순회

- Template_H_3_7

  - leftContents => Array 순회
  - rightContents => Array 순회

- Template_H_5_5

  - leftContents => Array 순회
  - rightContents => Array 순회

- TemplateConversation

  - leftContents => Array 순회
  - rightContents => Array 순회

- TemplateConversationToggle

  - leftContents => Array 순회
  - rightContents => Array 순회

- TemplateConversationRepeat

  - leftContents => Array 순회
  - rightContents => Array 순회

- TemplateQuizMultiChoice

  - leftContents => Array 순회

- TemplateRolePlaying

  - iconText // iconText.data.text
  - guideContent // guideContent.data.text

- TemplateQuizWordsInOrder

  - leftContents => Array 순회

- TemplateQuizSentencesInOrder

  - titleContents => Array 순회

- TemplateQuizConversation

  - leftContents => Array 순회

- TemplateQuizSpeaking

  - leftContents => Array 순회
  - rightContents => Array 순회

- TemplateWordCard
  - leftContents => Array 순회
  - rightContents => Array 순회

### Array 순회하면서 확인해야하는 고정 폰트를 사용하는 컴포넌트 리스트

- [x] 지시문(iconText)
  - data.text
- [x] 활동 안내(activityGuideCharacter)
  - data.text
- [x] 번호 매기기(numberingTextList)
  - data => 순회 => firstText, secondText
- [x] 학습 목표(borderTextBox)
  - data.text
- [x] 이미지(캡션)(imageWithCaptionList)
  - data => 순회 => caption
- [x] 이미지(설명)(imageWithDescriptionList)
  - data => 순회 => description
- [x] 코너 변경 안내(cornerGuideCharacter)
  - data.text
- [x] 설명문(explainingCharacter)
  - data.text
  - data.explain
- [x] 학습 요약(characterCardList)
  - data => 순회 => title, description
  - data => 순회 => modalContents => 순회 => Array 순회하면서 확인해야하는 함수 적용(재귀)
- [x] 학습 예고(notiCharacterList)
  - data => 순회 => title

## 팝업 레이어 컴포넌트 - 코너 변경 시 나오는 모달

- [x] 접근 방법
  - content_data -> JSON.parse() -> introduction
    - title
    - subTitle
    - contents
