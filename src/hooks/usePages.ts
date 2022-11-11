import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKey";
import { getPages } from "../data/tempApi";

const usePages = () => {
  const { cornerId } = useParams();
  const { data: pages } = useQuery([QUERY_KEY.PAGES, cornerId], () => {
    if (!cornerId) return;
    return getPages(cornerId);
  });

  return { pages };
};

export default usePages;
