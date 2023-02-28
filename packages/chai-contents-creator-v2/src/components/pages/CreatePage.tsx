import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { layoutState } from "../../states/layoutState";

const CreatePage = () => {
  const [layout] = useRecoilState(layoutState);
  useEffect(() => {
    console.log(layout);
  }, [layout]);

  // TODO : 템플릿 타입에 따라서 레이아웃을 변경해야함
  /**
   * TODO 모달창
   * - 컴포넌트 선택 시 나오는 모달
   * - 레이아웃 변경 시 나오는 모달
   *   - 경고 모달, 레이아웃 선택 모달
   * - 미리보기 시 나오는 모달
   * - 학습 변경 간지 추가 시 나오는 모달
   */

  return (
    <div>
      <h1>선택된 템플릿 : {layout?.templateType ?? "없음"}</h1>
      <div>
        <div>
          <button>레이아웃 변경</button>
          <button>미리보기</button>
        </div>
        <button>학습 변경 간지 추가</button>
      </div>
      <div>
        <button>컴포넌트 선택</button>
      </div>
      <button>+ 슬라이드 추가</button>
    </div>
  );
};

export default CreatePage;
