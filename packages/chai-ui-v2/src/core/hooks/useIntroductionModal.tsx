import React from "react";
import { useEffect, useMemo, useState } from "react";
import { LayoutModalIntroduction } from "../../components";
import { Page } from "../types";

interface UseIntroductionModalProps {
  page: Page;
}

const useIntroductionModal = ({ page }: UseIntroductionModalProps) => {
  const [isIntroductionModalOpen, setIsIntroductionModalOpen] = useState(false);

  useEffect(() => {
    if (page?.introduction) {
      setIsIntroductionModalOpen(true);
    }
  }, [page, setIsIntroductionModalOpen]);

  const introduction = useMemo(() => {
    if (page?.introduction) {
      return (
        <LayoutModalIntroduction
          isModalOpen={isIntroductionModalOpen}
          setIsModalOpen={setIsIntroductionModalOpen}
          introduction={page.introduction}
        />
      );
    }
  }, [page, isIntroductionModalOpen]);

  return {
    introduction,
  };
};

export default useIntroductionModal;
