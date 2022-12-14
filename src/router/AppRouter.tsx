import React, { useMemo } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import CornerListPage from "../components/pages/CornerListPage";
import CornerListPageToQuiz from "../components/pages/CornerListPageToQuiz";
import CornerPage from "../components/pages/CornerPage";
import MetaTestChoiceWord from "../components/pages/MetaTestChoiceWord";
import MetaTestWordTest from "../components/pages/MetaTestWordTest";
import MetaTestWordTestGrade from "../components/pages/MetaTestWordTestGrade";
import MetaTestWordTestReport from "../components/pages/MetaTestWordTestReport";
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
        <Route path={'test-word-choice'} element={<MetaTestChoiceWord />} />
        <Route path={'test-word-test'} element={<MetaTestWordTest />} />
        <Route path={'test-word-grade'} element={<MetaTestWordTestGrade />} />
        <Route path={'test-word-report'} element={<MetaTestWordTestReport />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
