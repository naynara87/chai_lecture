import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useLocation, useParams } from "react-router-dom";
import { getCorner } from "../../data/tempApi";
import useTemplateMapper from "../../hooks/useTemplateMapper";
import { Corner, ID } from "../../types/appData";
import CommonPageLayout from "../Layouts/CommonPageLayout";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

const CornerMain = styled.main`
  height: 100%;
  // Footer height 만큼 마진이나 패딩을 줘야 함
  padding-bottom: 60px;
`;

const CornerPage = () => {
  // get params from url
  const { state: cornerByRouter } = useLocation();
  const [corner, setCorner] = useState<Corner>(cornerByRouter);
  const { id: cornerId } = useParams();

  const fetchCorner = useCallback(async () => {
    if (!corner && cornerId) {
      const corner = await getCorner(cornerId as ID);
      // setCorner(corner);
    }
  }, [cornerId]);

  useEffect(() => {
    fetchCorner();
  }, [fetchCorner]);

  useEffect(() => {
    console.log("cornerByRouter", cornerByRouter);
  });

  const { getTemplateComponent } = useTemplateMapper();
  return (
    <CommonPageLayout>
      <>
        <Header />
        <CornerMain>{corner ? getTemplateComponent("TP01A") : <div>로딩중</div>}</CornerMain>
        <Footer />
      </>
    </CommonPageLayout>
  );
};

export default CornerPage;
