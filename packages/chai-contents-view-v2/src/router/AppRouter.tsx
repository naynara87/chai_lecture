import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import LayoutTemp from "../components/pages/LayoutTemp";
import NotFound from "../components/pages/NotFound";
import { HOME_URL, NOT_FOUND_URL } from "../constants/url";
import "chai-ui-v2/dist/assets/globalStyle.css";
import LayoutProblem from "../components/pages/LayoutProblem ";
import Home from "../components/pages/Home";
import QuestionScore from "../components/pages/QuestionScore";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/score"
          element={<QuestionScore />}
        />
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<Layout />}
        />
        <Route path={NOT_FOUND_URL} element={<NotFound />} />
        <Route path={"test"} element={<LayoutProblem />} />
        <Route path={"temp"} element={<LayoutTemp />} />
        <Route path="*" element={<Navigate to={NOT_FOUND_URL} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
