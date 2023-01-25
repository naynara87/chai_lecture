import React, { useEffect } from "react";
import styled from "@emotion/styled";
import "./common.scss";
import "./modal.scss";

const ModalLayout = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;

const ModalLayoutChange = () => {
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
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
                </button>
              </div>
            </div>
          </li>
          <li className="acc-list">
            <h2 className="acc-title">학습</h2>
            <div className="grid-container">
              <div className="acc-conts-wrap">
                <button className="btn btn-acc-choice">
                  <img src="https://via.placeholder.com/150" alt="임시이미지" />
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
