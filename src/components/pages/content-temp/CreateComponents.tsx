import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/useCreateContent";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./CreateComponents.scss";

const PageLayout = styled.div`
  display: block;
`;

const CreateComponents = () => {
  const { contentLayout } = useCreateContent();
  const navigate = useNavigate();

  useEffect(() => {
    if (!contentLayout) {
      // TODO: ModalAlert 으로 변경하기
      alert("레이아웃을 먼저 설정해주세요");
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  }, [contentLayout, navigate]);

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    // TODO: ModalConfirm 으로 변경하기
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  return (
    <PageLayout>
      <header>로고영역</header>
      <main>수정작업영역</main>
      <footer>버튼영역</footer>
    <button type="button" className="btn" onClick={handleLayoutClick}>
      레이아웃 설정
    </button>
    </PageLayout>
  );
};

export default CreateComponents;
