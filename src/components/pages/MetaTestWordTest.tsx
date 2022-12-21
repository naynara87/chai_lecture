import React from "react";
import useCornerPage from "../../hooks/useCornerPage";
import Header from "../molecules/Header";
import CommonMainContainer from "../atoms/CommonMainContainer";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import "../../styles/wordtest.css";

const MetaTestWordTest = () => {
  const { currentCorner, pages, appMetaData } = useCornerPage();

  return (
    <CommonPageLayout>
      <Header currentCorner={currentCorner} appMetaData={appMetaData} showCornerLabel />
      <CommonMainContainer>

        <TemplateCommonLayout>
          <TitleContent
            title="단어 메타인지 테스트"
            description="한자를 보고 한어병음과 뜻을 고르세요."
          />
          <main className="word-test-main">
            <div className="word-test-wrap">
              <h2 className="metatest-title">
                안다고 선택한 단어 : <b>{ '13' }</b>개
                {/* 총 단어 개수 : <b>{ '20' }</b>개 */}
              </h2>
              <ul>
                {/* question default */}
                {/* TODO: 최대 20문항 */}
                <li className="metatest-question-list">
                  <div className="text-wrap">
                    <span className="number">{ '1' }</span>
                    <span className="word">{ '打' }</span>
                  </div>

                  {/* choice word */}
                  <div className="choice-container">
                    {/* TODO: input이 check 되는 순간 .checked가 추가되고, 인풋은 disabled */}
                    <div className="choice-wrap checked">
                      <h3 className="inp-title">한어병음</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId1" className="inp-radio" disabled checked />
                        <label htmlFor="inputId1" className="inp-radio-layout">
                          { 'huì' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId2" className="inp-radio" disabled />
                        <label htmlFor="inputId2" className="inp-radio-layout">
                          { 'dǎ' }
                        </label>
                      </div>
                    </div>

                    <div className="choice-wrap">
                      <h3 className="inp-title">뜻</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId3" className="inp-radio" />
                        <label htmlFor="inputId3" className="inp-radio-layout">
                        { '치다' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId4" className="inp-radio" />
                        <label htmlFor="inputId4" className="inp-radio-layout">
                        { '떨다' }
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* TODO: 타이머는 병음 + 뜻 합쳐서 10초 카운트다운 */}
                  {/* FIXME: 플러그인 적용되면 스타일 변경 예정 */}
                  {/* <div className="test-timer">{ '10' }</div> */}
                  <div className="test-timer half">{ '5' }</div>
                  {/* <div className="test-timer zero">{ '0' }</div> */}
                </li>
                
                {/* question disabled */}
                {/* TODO: 문제 풀이시간이 0초가 되는 순간에 잠시 보일 레이아웃 */}
                {/* TODO: 0초가 되었을 때 보인 후, .disabled 로 바로 변경된다 */}
                <li className="metatest-question-list timeout">
                  <div className="text-wrap">
                    <span className="number">{ '1' }</span>
                    <span className="word">{ '打' }</span>
                  </div>

                  {/* choice word */}
                  <div className="choice-container">
                    <div className="choice-wrap checked">
                      <h3 className="inp-title">한어병음</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId1" className="inp-radio" disabled checked />
                        <label htmlFor="inputId1" className="inp-radio-layout">
                          { 'huì' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId2" className="inp-radio" disabled />
                        <label htmlFor="inputId2" className="inp-radio-layout">
                          { 'dǎ' }
                        </label>
                      </div>
                    </div>

                    <div className="choice-wrap">
                      <h3 className="inp-title">뜻</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId3" className="inp-radio" disabled />
                        <label htmlFor="inputId3" className="inp-radio-layout">
                        { '치다' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId4" className="inp-radio" disabled />
                        <label htmlFor="inputId4" className="inp-radio-layout">
                        { '떨다' }
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* TODO: 타이머는 병음 + 뜻 합쳐서 10초 카운트 */}
                  <div className="test-timer">{ '10' }</div>
                </li>
                
                {/* question disabled */}
                {/* TODO: 풀거나 시간이 지난 문제는 .disabled 가 추가되면서 비활성화되고, input들 disabled */}
                <li className="metatest-question-list disabled">
                  <div className="text-wrap">
                    <span className="number">{ '1' }</span>
                    <span className="word">{ '打' }</span>
                  </div>

                  {/* choice word */}
                  <div className="choice-container">
                    <div className="choice-wrap">
                      <h3 className="inp-title">한어병음</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId1" className="inp-radio" disabled checked />
                        <label htmlFor="inputId1" className="inp-radio-layout">
                          { 'huì' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId2" className="inp-radio" disabled />
                        <label htmlFor="inputId2" className="inp-radio-layout">
                          { 'dǎ' }
                        </label>
                      </div>
                    </div>

                    <div className="choice-wrap">
                      <h3 className="inp-title">뜻</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId3" className="inp-radio" disabled checked />
                        <label htmlFor="inputId3" className="inp-radio-layout">
                        { '치다' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId4" className="inp-radio" disabled />
                        <label htmlFor="inputId4" className="inp-radio-layout">
                        { '떨다' }
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* TODO: 타이머는 병음 + 뜻 합쳐서 10초 카운트 */}
                  <div className="test-timer">{ '10' }</div>
                </li>
                
                {/* question disabled */}
                {/* TODO: timeout으로 인해 disabled가 되면 선택 못한 요소는 미선택 text가 들어감 */}
                <li className="metatest-question-list disabled">
                  <div className="text-wrap">
                    <span className="number">{ '1' }</span>
                    <span className="word">{ '打' }</span>
                  </div>

                  {/* choice word */}
                  <div className="choice-container">
                    <div className="choice-wrap">
                      <h3 className="inp-title">한어병음</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId1" className="inp-radio" disabled />
                        <label htmlFor="inputId1" className="inp-radio-layout">
                          { 'huì' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId2" className="inp-radio" disabled />
                        <label htmlFor="inputId2" className="inp-radio-layout">
                          { 'dǎ' }
                        </label>
                      </div>
                      {/* TODO: timeout disabled 에만 있는 태그 */}
                      <p className="inp-radio-layout">미선택</p>
                    </div>

                    <div className="choice-wrap">
                      <h3 className="inp-title">뜻</h3>
                      <div className="inp-grp">
                        <input type="radio" id="inputId3" className="inp-radio" disabled />
                        <label htmlFor="inputId3" className="inp-radio-layout">
                        { '치다' }
                        </label>
                      </div>
                      <div className="inp-grp">
                        <input type="radio" id="inputId4" className="inp-radio" disabled />
                        <label htmlFor="inputId4" className="inp-radio-layout">
                        { '떨다' }
                        </label>
                      </div>
                      {/* TODO: timeout disabled 에만 있는 태그 */}
                      <p className="inp-radio-layout">미선택</p>
                    </div>
                  </div>

                  {/* TODO: 타이머는 병음 + 뜻 합쳐서 10초 카운트 */}
                  <div className="test-timer">{ '10' }</div>
                </li>

              </ul>
            </div>
          </main>
        </TemplateCommonLayout>
      </CommonMainContainer>
      <footer>footer</footer>
    </CommonPageLayout>
  );
};

export default MetaTestWordTest;
