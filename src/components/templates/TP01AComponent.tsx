import React, { useEffect } from "react";
import { TemplateProps } from "../../types/templates";

interface TP01AComponentProps extends TemplateProps {}
const TP01AComponent = ({ setPageCompleted, page }: TP01AComponentProps) => {
  useEffect(() => {
    console.log("page", page);
  });
  return <div>TP01AComponent</div>;
};

export default TP01AComponent;
