import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKey";
import { getCorner } from "../data/tempApi";

const useCorner = () => {
  const { cornerId } = useParams();
  const { data: corner } = useQuery(
    [QUERY_KEY.CORNER, cornerId],
    () => {
      if (cornerId === undefined) {
        throw new Error("cornerId is undefined");
      }
      return getCorner(cornerId);
    },
    {
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const pageIds = useMemo(() => {
    return corner?.pages.map((page) => page.id) ?? [];
  }, [corner]);

  return {
    cornerId,
    currentCorner: corner,
    pageIds,
  };
};

export default useCorner;
