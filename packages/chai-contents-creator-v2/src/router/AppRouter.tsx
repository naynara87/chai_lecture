import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ChooseLayoutPage from "../components/pages/CreateLayout";
import NotFound from "../components/pages/NotFound";
import { HOME_URL, NOT_FOUND_URL } from "../constants/url";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<ChooseLayoutPage />} />
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<div>each page</div>}
        />
        <Route path={NOT_FOUND_URL} element={<NotFound />} />
        <Route path="*" element={<Navigate to={NOT_FOUND_URL} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
