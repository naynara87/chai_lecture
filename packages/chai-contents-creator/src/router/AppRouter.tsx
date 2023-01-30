import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  CREATE_CONTENT_LAYOUT_URL,
  CREATE_CONTENT_COMPONENTS_URL,
} from "chai-ui/src/constants/url";
import CreateLayout from "../components/pages/CreateLayout";
import CreateComponents from "../components/pages/CreateComponents";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CREATE_CONTENT_LAYOUT_URL} element={<CreateLayout />} />
        <Route
          path={CREATE_CONTENT_COMPONENTS_URL}
          element={<CreateComponents />}
        />
        <Route
          path="*"
          element={<Navigate to={CREATE_CONTENT_LAYOUT_URL} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
