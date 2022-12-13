import React, { useMemo } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerListPageToQuiz from "../components/pages/CornerListPageToQuiz";
import CornerPage from "../components/pages/CornerPage";
import { CORNER_LIST_URL } from "../constants/url";
import useInitialData from "../hooks/useInitialData";

const AppRouter = () => {
  const { appMetaData } = useInitialData();

  const getRoute = useMemo(() => {
    if (appMetaData?.lessonTpCd !== "10") {
      return <Route path={CORNER_LIST_URL} element={<CornerListPage />} />;
    } else {
      return <Route path={CORNER_LIST_URL} element={<CornerListPageToQuiz />} />;
    }
  }, [appMetaData?.lessonTpCd]);

  return (
    <HashRouter>
      <Routes>
        {getRoute}
        <Route
          path="course/:courseId/lesson/:lessonId/corner/:cornerId/page/:pageId"
          element={<CornerPage />}
        />
        <Route path="*" element={<Navigate to={CORNER_LIST_URL} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
