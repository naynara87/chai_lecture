import React, { useEffect } from "react";
import { Template01 } from "../../components";
import TemplateExam from "../../components/templates/TemplateExam";
import { PageProps } from "../types";
import { TemplateType } from "../types/appData";

interface UseTemplateMapperProps extends PageProps {}
const useTemplateMapper = (props: UseTemplateMapperProps) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  const templateMapper: Record<TemplateType, JSX.Element> = {
    Template01: (
      <Template01 page={props.page} setPageCompleted={props.setPageCompleted} />
    ),
    Template_H_3_7: <TemplateExam />,
    Template_H_5_5: <TemplateExam />,
  };

  const getTemplateComponent = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return {
    getTemplateComponent,
  };
};

export default useTemplateMapper;
