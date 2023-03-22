import {Page, TemplateQuestion, TemplateQuestionData} from "chai-ui-v2";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import usePages from "../../hooks/usePages";
import {getPageUrl} from "../../util/url";
import ComponentProblemPagination from "../molecules/ComponentProblemPagination";
import LayoutQuestionHeader from "../molecules/LayoutQuestionHeader";

interface QuestionLayoutProps {
    pages: Page[];
}

const QuestionLayout = ({pages}: QuestionLayoutProps) => {
    const [, setIsPageCompleted] = useState(false);

    const {courseId, cornerId, lessonId, pageId} = useParams();

    const navigate = useNavigate();
    const {currentPage, pageIds, currentPageIndex} = usePages({
        pages,
        pageId,
    });
    const setPageCompleted = () => {
        setIsPageCompleted(true);
    };


    let tmpPageDatas = localStorage.getItem('pageData')


    const handleClickPagination = (pageIndex: number) => {
        if (currentPageIndex === undefined) return;
        if (!pageIds) return;

        // NOTE ms page index 받아서 page index active 추가
        // if (tmpPageDatas != null) {
        //     let arrayData = JSON.parse(tmpPageDatas);
        //     arrayData[pageIndex].state = 'end';
        //     localStorage.setItem('pageData', JSON.stringify(arrayData));
        // }
        // NOTE ms page index 받아서 page index active 추가

        // todo ms 문제 풀고 정답 체크하는 부분을 localstorage를 이용해서 해결해야함


        if (cornerId && courseId && lessonId && pageId) {
            navigate(getPageUrl(courseId, lessonId, cornerId, pageIds[pageIndex]), {
                state: localStorage.getItem('pageData')
            });
        }
    };

    return (
        <>
            <LayoutQuestionHeader/>
            <main className="cai-main problem-main">
                <ComponentProblemPagination
                    pages={pages}
                    onClickPagination={handleClickPagination}
                />
                {currentPage?.data && (
                    <TemplateQuestion
                        template={currentPage.data as TemplateQuestionData}
                        setPageCompleted={setPageCompleted}
                    />
                )}
            </main>
        </>
    );
};

export default QuestionLayout;
