import { useParams } from "react-router-dom";
import usePageList from "./usePageList";

const usePageLcms = () => {
  const { cornerId, pageId } = useParams();
  const { pageList } = usePageList(cornerId);

  const page = pageList?.find((page) => page.page_id.toString() === pageId);

  return {
    currentPageData: page,
    pageList,
  };
};

export default usePageLcms;
