import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
  CreateEditTop,
} from "../../styles/template";
import Button from "../atoms/Button";

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
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              <button className="btn-comp-select">컴포넌트 선택</button>
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
    </>
  );
};

export default TemplateMainLoading;
