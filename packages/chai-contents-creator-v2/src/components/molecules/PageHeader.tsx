import { ModalConfirm, TemplateType } from "chai-ui-v2";
import React, { useState } from "react";
import { CreateEditTop } from "../../styles/template";
import { PageHeaderProps } from "../../types/page";
import Button from "../atoms/Button";
import ModalLayoutChange from "./modal/ModalLayoutChange";

const PageHeader = ({ slideIndex, handleChangeLayout }: PageHeaderProps) => {
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const OpenModalConfirm = () => setIsModalConfirmOpen(true);
  const CloseModalConfirm = () => setIsModalConfirmOpen(false);

  const [isModalLayoutChangeOpen, setIsModalLayoutChangeOpen] = useState(false);
  const OpenModalLayoutChange = () => setIsModalLayoutChangeOpen(true);
  const CloseModalLayoutChange = () => setIsModalLayoutChangeOpen(false);

  const handleClickLayout = (templateType: TemplateType) => {
    handleChangeLayout(slideIndex, templateType);
    CloseModalLayoutChange();
  };

  return (
    <CreateEditTop>
      <Button onClick={OpenModalConfirm}>레이아웃 변경</Button>
      <ModalConfirm
        isModalOpen={isModalConfirmOpen}
        setIsModalOpen={setIsModalConfirmOpen}
        title={"레이아웃을 \n변경하시겠습니까?"}
        description={
          "변경 클릭 시 작업 중인 콘텐츠는 삭제되며, \n복원이 불가능합니다."
        }
        leftButtonText="취소"
        rightButtonText="변경"
        handleClickLeftButton={CloseModalConfirm}
        handleClickRightButton={() => {
          CloseModalConfirm();
          OpenModalLayoutChange();
        }}
      />
      <ModalLayoutChange
        isModalOpen={isModalLayoutChangeOpen}
        setIsModalOpen={setIsModalLayoutChangeOpen}
        handleLayoutChange={handleClickLayout}
      />
    </CreateEditTop>
  );
};

export default PageHeader;
