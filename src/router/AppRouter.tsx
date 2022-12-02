import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";
import { CORNER_LIST_URL } from "../constants/url";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CORNER_LIST_URL} element={<CornerListPage />} />
        <Route
          path={`${process.env.PUBLIC_URL}/course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId`}
          element={<CornerPage />}
        />
        <Route path={`/v1/bubble-player`} element={<CornerPage />} />
        <Route path="*" element={<Navigate to={`${process.env.PUBLIC_URL}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
