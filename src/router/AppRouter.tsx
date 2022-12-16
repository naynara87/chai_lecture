import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import MetaTestWordChoice from "../components/pages/MetaTestWordChoice";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import MetaTestWordTestReport from "../components/pages/MetaTestWordTestReport";
import MetaTestWordLearning from "../components/pages/MetaTestWordLearning";
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
        <Route path={"test-word-choice"} element={<MetaTestWordChoice />} />
        <Route path={"test-word-test"} element={<MetaTestWordTest />} />
        <Route path={"test-word-grade"} element={<MetaTestWordTestGrade />} />
        <Route path={"test-word-report"} element={<MetaTestWordTestReport />} />
        <Route path={"test-word-learning"} element={<MetaTestWordLearning />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
 