import React from "react";
import useTemplateMapper from "../../hooks/useTemplateMapper";
import { Page } from "../../types/appData";

interface CornerMainProps {
  page: Page;
  setIsPageCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
const CornerMain = ({ page, setIsPageCompleted }: CornerMainProps) => {
  const setPageCompleted = () => {
    setIsPageCompleted(true);
  };
  const { getTemplateComponent } = useTemplateMapper({ setPageCompleted, page });
  return <>{getTemplateComponent(page.template.type)}</>;
};

export default CornerMain;
