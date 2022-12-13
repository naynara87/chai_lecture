import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import MetaTestChoiceWord from "../components/pages/MetaTestChoiceWord";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import { CORNER_LIST_URL } from "../constants/url";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={CORNER_LIST_URL} element={<CornerListPage />} />
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<CornerPage />}
        />
        <Route path="*" element={<Navigate to={CORNER_LIST_URL} replace />} />
        <Route path={'test-main'} element={<MetaTestChoiceWord />} />
        <Route path={'test-word-test'} element={<MetaTestWordTest />} />
        <Route path={'test-word-grade'} element={<MetaTestWordTestGrade />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
