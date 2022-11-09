import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAppData } from "../../data/tempApi";
import { AppData, Corner } from "../../types/appData";
import Header from "../molecules/Header";

const CornerListLayout = styled.div`
  height: 100vh;
`;

const CornerListPage = () => {
  const [appData, setAppData] = useState<AppData>();
  const fetchAppData = useCallback(async () => {
    const appData = await getAppData();
    setAppData(appData);
  }, []);

  useEffect(() => {
    fetchAppData();
  }, [fetchAppData]);

  const [currentCorner, setCurrentCorner] = useState<Corner>();

  useEffect(() => {
    if (!appData) return;
    const { corners } = appData;
    const currentCorner = corners.find((corner) => !corner.isCompleted);
    setCurrentCorner(currentCorner);
  }, [appData]);

  return (
    <CornerListLayout>
      <>
        <Header />
        <h1>{appData ? appData.title : "제목 로딩중"}</h1>
        {/* 아래 글은 현재 Corner의 description을 보여줘야 한다 */}
        <h4>{appData ? appData.description : "설명 로딩 중"}</h4>
        {appData ? (
          <>
            <main>
              {/* TODO: 현재 코너는 컬러 나머진 흑백 */}
              {appData.corners.map((corner) => (
                <div key={corner.id}>{corner.title}</div>
              ))}
            </main>
            <footer>
              <button type="button">
                <Link to={`/corner/${currentCorner?.id}`} state={{ appData, currentCorner }}>
                  시작하기
                </Link>
              </button>
            </footer>
          </>
        ) : (
          <div>로딩중</div>
        )}
      </>
    </CornerListLayout>
  );
};

export default CornerListPage;
