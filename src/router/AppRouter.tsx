import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerPage from "../components/pages/CornerPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CornerListPage />} />
        <Route path="corner/:id" element={<CornerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
