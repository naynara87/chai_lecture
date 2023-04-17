import React from "react";
import { useEffect, useMemo, useState } from "react";
import { LayoutModalIntroduction } from "../../components";
import { Page } from "../types";

interface UseIntroductionModalProps {
  page: Page;
}

const useIntroductionModal = ({ page }: UseIntroductionModalProps) => {
  const [isIntroductionModalOpen, setIsIntroductionModalOpen] = useState(false);

  const hasIntroduction = useMemo(() => {
    if (!page?.introduction) {
      return false;
    }
    if (
      page.introduction.title !== "" ||
      page.introduction.subTitle !== "" ||
      page.introduction.contents !== "" ||
      page.introduction.soundEffect?.src !== ""
    ) {
      return true;
    }

    return false;
  }, [page]);

  useEffect(() => {
    if (hasIntroduction) {
      setIsIntroductionModalOpen(true);
    }
  }, [hasIntroduction, page]);

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
