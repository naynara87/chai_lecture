import React, { useCallback, useMemo, useState } from "react";
import {
  ComponentButtonFillBlack,
  IconCloseComponent,
  IconOpenComponent,
  IconLeftArrowComponent,
  IconRightArrowComponent,
  ImgCharacterComponent,
  Page,
  CornerListData,
  LayoutModalExit,
} from "chai-ui-v2";
import { Link, useParams } from "react-router-dom";
import { getPageUrl } from "../../util/url";
import styled from "@emotion/styled";

const LinkTag = styled.a``;

interface LayoutFooterProps {
  corners: CornerListData[];
  pages?: Page[];
  currentPageIndex: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
  totalPages: (string | number)[];
}

const LayoutFooter = ({
  pages,
  corners,
  currentPageIndex,
  handleClickNext,
  handleClickPrev,
  totalPages,
}: LayoutFooterProps) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const { courseId, lessonId, cornerId } = useParams();

  const navGetPageUrl = useCallback(
    (corner: string, page: string) => {
      if (!courseId || !lessonId) {
        return "/";
      }
      console.log("뭔데", corner, page);
      return getPageUrl(courseId, lessonId, corner, page);
    },
    [courseId, lessonId],
  );

  const cornerList = useMemo(() => {
    if (!courseId && !lessonId) {
      return;
    }
    return corners.map((corner, cornerIndex) => {
      if (cornerId?.toString() === corner.id.toString()) {
        return (
          <li className="cai-nav-list active" key={cornerIndex}>
            <LinkTag className="cai-nav-link">{corner.name}</LinkTag>
          </li>
        );
      }
      return (
        <li className="cai-nav-list" key={cornerIndex}>
          <Link
            to={navGetPageUrl(corner.id.toString(), corner.pages[0].toString())}
            className="cai-nav-link"
            onClick={() => {
              setIsShowNav(false);
            }}
          >
            {corner.name}
          </Link>
        </li>
      );
    });
  }, [corners, courseId, lessonId, cornerId, navGetPageUrl]);

  const totalPagesToCurrentPageIndex = useMemo(() => {
    if (!pages) return;
    return totalPages.findIndex((page) => pages[currentPageIndex].id === page);
  }, [pages, totalPages, currentPageIndex]);

  return (
    <div>
      <footer className="cai-ft">
        {/* position: absolute */}
        {/* key설명 - 클릭시 스스로와 cai-nav-container에 active 추가 */}
        <button
          className={`btn-ft-text ${isShowNav ? "active" : ""}`}
          onClick={() => {
            setIsShowNav(!isShowNav);
          }}
        >
          코너
          <IconOpenComponent />
          <IconCloseComponent />
        </button>
        <div className="ft-conts-wrap">
          <button
            className="ft-icon-btn"
            onClick={handleClickPrev}
            disabled={currentPageIndex === 0}
          >
            <IconLeftArrowComponent />
          </button>
          <span className="txt">
            <b>{totalPagesToCurrentPageIndex! + 1}</b>
            <small> / {totalPages.length}</small>
          </span>
          <button className="ft-icon-btn" onClick={handleClickNext}>
            <IconRightArrowComponent />
          </button>
        </div>
      </footer>

      <div className={`cai-nav-container ${isShowNav ? "active" : ""}`}>
        <ImgCharacterComponent
          characterType="winiWink"
          characterAlt="위니윙크"
        />
        <nav className="cai-nav-wrap">
          <ul className="cai-nav-list-wrap">
            {/* key설명 - 반복영역 클릭시 해당 코너의 시작 페이지로 이동 */}
            {cornerList}
          </ul>
          <div className="btn-wrap">
            <ComponentButtonFillBlack
              text={"나가기"}
              onClickBtn={() => setIsExitModalOpen(true)}
            />
          </div>
        </nav>
      </div>
      <LayoutModalExit
        isModalOpen={isExitModalOpen}
        setIsModalOpen={setIsExitModalOpen}
      />
    </div>
  );
};

export default LayoutFooter;
