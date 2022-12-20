import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import MetaTestWordChoice from "../components/pages/MetaTestWordChoice";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import MetaTestWordTestReport from "../components/pages/MetaTestWordTestReport";
import MetaTestWordLearning from "../components/pages/MetaTestWordLearning";
import MetaTestSentenceReport from "../components/pages/MetaTestSentenceReport";
import { CORNER_LIST_URL } from "../constants/url";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={CORNER_LIST_URL} element={<CornerListPage />} />;
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<CornerPage />}
        />
        <Route path="*" element={<Navigate to={CORNER_LIST_URL} replace />} />
        {/* 단어 테스트 */}
        <Route path={"test-word-choice"} element={<MetaTestWordChoice />} />
        {/* 단어 테스트01 ~ 단어 테스트05, 확인 문제01 */}
        <Route path={"test-word-test"} element={<MetaTestWordTest />} />
        {/* 단어 테스트06, 확인 문제02 */}
        <Route path={"test-word-grade"} element={<MetaTestWordTestGrade />} />
        {/* 단어 테스트 결과-아는 단어, 단어 테스트 결과-모르는 단어 */}
        <Route path={"test-word-report"} element={<MetaTestWordTestReport />} />
        {/* 단어 학습-학습단어01, 02, 단어테스트 최종 결과 */}
        <Route path={"test-word-learning"} element={<MetaTestWordLearning />} />
        {/* TP03H */}
        <Route path={"test-sentence"} element={<MetaTestSentenceReport />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
 