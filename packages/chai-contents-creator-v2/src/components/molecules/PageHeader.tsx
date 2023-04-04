import { css } from "@emotion/react";
import { colorPalette, ModalConfirm, TemplateType } from "chai-ui-v2";
import React, { useState } from "react";
import { CreateEditTop } from "../../styles/template";
import { PageHeaderProps } from "../../types/page";
import Button from "../atoms/Button";
import ModalLayoutChange from "./modal/ModalLayoutChange";

const deleteButtonStyle = css`
  color: ${colorPalette.red700};
`;

const PageHeader = ({
  slideId,
  handleChangeLayout,
  deleteSlide,
  slides,
}: PageHeaderProps) => {
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const OpenModalConfirm = () => setIsModalConfirmOpen(true);
  const closeModalConfirm = () => setIsModalConfirmOpen(false);

  const [isModalLayoutChangeOpen, setIsModalLayoutChangeOpen] = useState(false);
  const OpenModalLayoutChange = () => setIsModalLayoutChangeOpen(true);
  const closeModalLayoutChange = () => setIsModalLayoutChangeOpen(false);

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const OpenModalDelete = () => setIsModalDeleteOpen(true);
  const closeModalDelete = () => setIsModalDeleteOpen(false);

  const handleClickDeleteSlide = () => {
    deleteSlide(slideId);
    closeModalDelete();
  };

  const handleClickLayout = (templateType: TemplateType) => {
    handleChangeLayout(slideId, templateType);
    closeModalLayoutChange();
  };

  return (
    <CreateEditTop>
      <Button onClick={OpenModalConfirm}>레이아웃 변경</Button>
      {slides.length > 1 && (
        <Button onClick={OpenModalDelete} customCSS={deleteButtonStyle}>
          슬라이드 삭제
        </Button>
      )}
      {/* 레이아웃 변경 확인 모달 */}
      <ModalConfirm
        isModalOpen={isModalConfirmOpen}
        setIsModalOpen={setIsModalConfirmOpen}
        title={"레이아웃을 \n변경하시겠습니까?"}
        description={
          "변경 클릭 시 작업 중인 콘텐츠는 삭제되며, \n복원이 불가능합니다."
        }
        leftButtonText="취소"
        rightButtonText="변경"
        handleClickLeftButton={closeModalConfirm}
        handleClickRightButton={() => {
          closeModalConfirm();
          OpenModalLayoutChange();
        }}
      />
      {/* 삭제 확인 모달 */}
      <ModalConfirm
        isModalOpen={isModalDeleteOpen}
        setIsModalOpen={setIsModalDeleteOpen}
        title={"슬라이드를 \n삭제하시겠습니까?"}
        description={
          "삭제 클릭 시 작업 중인 콘텐츠는 삭제되며, \n복원이 불가능합니다."
        }
        leftButtonText="취소"
        rightButtonText="삭제"
        handleClickLeftButton={closeModalDelete}
        handleClickRightButton={handleClickDeleteSlide}
      />
      {/* 레이아웃 변경 모달 */}
      <ModalLayoutChange
        isModalOpen={isModalLayoutChangeOpen}
        setIsModalOpen={setIsModalLayoutChangeOpen}
        handleLayoutChange={handleClickLayout}
      />
    </CreateEditTop>
  );
};

export default PageHeader;
