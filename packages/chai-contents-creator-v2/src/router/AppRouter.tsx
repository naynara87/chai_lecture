import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import CreatePage from "../components/pages/CreatePage";
import Preview from "../components/pages/Preview";
import { HOME_URL, PREVIEW_URL } from "../constants/url";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<CreatePage />} />
        <Route path={PREVIEW_URL} element={<Preview />} />
        <Route path="*" element={<Navigate to={HOME_URL} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
