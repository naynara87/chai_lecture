import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CreateComponents from "../components/pages/content-temp/CreateComponents";
import CreateLayout from "../components/pages/content-temp/CreateLayout";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import MetaTestWordChoice from "../components/pages/MetaTestWordChoice";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import MetaTestWordTestReport from "../components/pages/MetaTestWordTestReport";
import {
  CONTENT_URL,
  CORNER_LIST_URL,
  CREATE_CONTENT_BASE_URL,
  CREATE_CONTENT_COMPONENTS_URL,
  CREATE_CONTENT_LAYOUT_URL,
} from "../constants/url";

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
        <Route path={CREATE_CONTENT_LAYOUT_URL} element={<CreateLayout />} />
        <Route path={CREATE_CONTENT_COMPONENTS_URL} element={<CreateComponents />} />
        <Route
          path={CREATE_CONTENT_BASE_URL}
          element={<Navigate to={CREATE_CONTENT_LAYOUT_URL} replace />}
        />
        <Route path={CONTENT_URL} element={<Navigate to={CREATE_CONTENT_LAYOUT_URL} replace />} />
        <Route path="*" element={<Navigate to={CORNER_LIST_URL} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
