import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Layout from "../components/pages/Layout";
import NotFound from "../components/pages/NotFound";
import TempRolePlay from "../components/pages/TempRolePlay";
import { HOME_URL, NOT_FOUND_URL } from "../constants/url";
import "chai-ui-v2/dist/globalStyle.css";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<Layout />}
        />
        <Route path={NOT_FOUND_URL} element={<NotFound />} />
        <Route path={"temp"} element={<Layout />} />
        <Route path={"temp-roleplay"} element={<TempRolePlay />} />
        <Route path="*" element={<Navigate to={NOT_FOUND_URL} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
