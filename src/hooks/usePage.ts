import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKey";
import { getPage } from "../data/tempApi";

const usePage = () => {
  const { cornerId, pageId } = useParams();
  const { data: page } = useQuery([QUERY_KEY.PAGE, cornerId, pageId], () => {
    if (!cornerId || !pageId) return;
    return getPage(cornerId, pageId);
  });

  return { page, cornerId, pageId };
};

export default usePage;
