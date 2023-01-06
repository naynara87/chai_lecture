import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/useCreateContent";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import "./modal.scss";

// NOTE: 특정 페이지에서만 스타일이 변경될 시 사용
const ModalLayout = styled.div`
`;

const ModalLayoutChange = () => {
  const { contentLayout } = useCreateContent();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!contentLayout) {
  //     // TODO: ModalAlert 으로 변경하기
  //     alert("레이아웃을 먼저 설정해주세요");
  //     navigate(CREATE_CONTENT_LAYOUT_URL);
  //   }
  // }, [contentLayout, navigate]);

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    // TODO: ModalConfirm 으로 변경하기
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  return (
    <ModalLayout>
      <div className="modal-bg"></div>
      <div className="modal-container mocal-layout-change">
        <ul className="acc-list-wrap">
          <li className="acc-list">
            <h2 className="acc-title">전체학습</h2>
            <div className="grid-container active">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </ModalLayout>
  );
};

export default ModalLayoutChange;
