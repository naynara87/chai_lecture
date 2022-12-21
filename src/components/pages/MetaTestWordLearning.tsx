import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import Header from "../molecules/Header";
import CommonMainContainer from "../atoms/CommonMainContainer";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import "../../styles/wordtest.css";

const MetaTestWordLearning = () => {
  const { currentCorner, pages, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>

        <TemplateCommonLayout>
          <TitleContent
            title="단어 학습"
            description="잘 몰랐던 단어의 한어병음, 뜻, 예문을 학습해봐요 !"
          />
          <main className="word-test-main">
            <h2 className="learning-pagination">학습 단어 : { '2' }/<b className="c-main">{ '20' }</b>개</h2>
            <div className="learning-word-container">
              <div className="learning-word-wrap">
                <p>{ '好好好好' }</p>
                <button>듣기버튼</button>
              </div>
              <div className="learning-mean-wrap">
                <dl className="learning-word-list">
                  <dt className="learning-word-list-ttl">한어병음</dt>
                  <dd className="learning-word-list-dec">
                    <p>{ 'dǎ' }</p>
                    </dd>
                </dl>
                <dl className="learning-word-list">
                  <dt className="learning-word-list-ttl">뜻</dt>
                  <dd className="learning-word-list-dec">
                    <p>{ '(놀이·운동을) 하다' }</p>
                    </dd>
                </dl>
                <dl className="learning-word-list">
                  <dt className="learning-word-list-ttl">예문</dt>
                  <dd className="learning-word-list-dec">
                    <button>듣기버튼 컴포넌트 적용하면 포지션 띄우기</button>
                  <p>{ '如果你要获得成功,就应当以恒心为良友,以经验为顾问,以小心为兄弟,以希望为守护者.' }</p>
                  <p>{ 'Rúguǒ nǐ yào huòdé chénggōng ,jiù yīngdāng yǐ héngxīn wèi liángyǒu ,yǐ jīngyàn wèigùwèn ,yǐ xiǎoxīn wèi xiōngdì ,yǐ xīwàng wéi shǒuhùzhě.' }</p>
                  <p>{ '만약 당신이 성공하고 싶다면, 반드시 꾸준함을 좋은 친구로, 경험을 고문으로, 주의를 형제로, 희망을 수호자로 여겨야 한다.' }</p>
                  </dd>
                </dl>
              </div>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordLearning;
