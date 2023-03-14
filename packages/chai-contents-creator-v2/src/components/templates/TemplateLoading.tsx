import {
  CreateEditMainWrap,
  CreateEditMain,
  CreateTemplateChoiceBtnWrap,
  CreateEditTop,
} from "../../styles/template";
import Button from "../atoms/Button";
import { DashBoxAreaWrapper } from "../atoms/DashBoxArea";

const TemplateMainLoading = () => {
  return (
    <>
      {/* TODO: 로딩 스켈레톤 적용하기 */}
      <CreateEditTop>
        <div>
          <Button>레이아웃 변경</Button>
          <Button>미리보기</Button>
        </div>
      </CreateEditTop>
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxAreaWrapper>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select">컴포넌트 선택</button>
            </CreateTemplateChoiceBtnWrap>
          </DashBoxAreaWrapper>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default TemplateMainLoading;
