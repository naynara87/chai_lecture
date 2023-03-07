import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalConfirm, {
  ModalModalConfirmProps,
} from "../../../components/modal/ModalConfirm";

const Template: ComponentStory<typeof ModalConfirm> = (args) => {
  return <ModalConfirm {...args} />;
};

const data: ModalModalConfirmProps = {
  isModalOpen: true,
  setIsModalOpen: () => {
    console.log("setIsModalOpen");
  },
  handleClickLeftButton: () => {
    console.log("handleClickLeftButton");
  },
  handleClickRightButton: () => {
    console.log("handleClickRightButton");
  },
  title: "레이아웃을 변경하시겠습니까?",
  description: "변경 클릭 시 작업 중인 콘텐츠는 삭제되며, 복원이 불가능합니다.",
  leftButtonText: "취소",
  rightButtonText: "변경",
};

export default {
  title: "components/contents/ModalConfirm",
  component: ModalConfirm,
  argTypes: {
    contentData: {
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof ModalConfirm>;

export const Default = Template.bind({});
Default.args = {
  ...data,
};
