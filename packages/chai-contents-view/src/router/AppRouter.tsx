import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import MetaTestWordChoice from "../components/pages/MetaTestWordChoice";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import MetaTestWordTestReport from "../components/pages/MetaTestWordTestReport";
import { CORNER_LIST_URL } from "../constants/url";
import Template01 from "../components/pages/Template01";
import Template02 from "../components/pages/Template02";
import Template03 from "../components/pages/Template03";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={CORNER_LIST_URL} element={<CornerListPage />} />;
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<CornerPage />}
        />
        <Route path={"test-word-choice"} element={<MetaTestWordChoice />} />
        <Route path={"test-word-test"} element={<MetaTestWordTest />} />
        <Route path={"test-word-grade"} element={<MetaTestWordTestGrade />} />
        <Route path={"test-word-report"} element={<MetaTestWordTestReport />} />
        <Route path="*" element={<Navigate to={CORNER_LIST_URL} replace />} />
        <Route path={"temp01"} element={<Template01 children={<div>여기에 콘텐츠 위치할 예정</div>} />} />
        <Route path={"temp02"} element={<Template02 sideCard={<div>여기에 콘텐츠 위치할 예정</div>} wideCard={<div>여기에 콘텐츠 위치할 예정</div>} />} />
        <Route path={"temp03"} element={<Template03 sideCard={<div>여기에 콘텐츠 위치할 예정</div>} wideCard={<div>여기에 콘텐츠 위치할 예정</div>} />} />
      </Routes>
    </HashRouter>
  );  
};

export default AppRouter;
