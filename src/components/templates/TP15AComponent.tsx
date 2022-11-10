import React, { useEffect } from "react";
import { TemplateProps } from "../../types/templates";

interface TP15AComponentProps extends TemplateProps {}

const TP15AComponent = ({ setPageCompleted, page }: TP15AComponentProps) => {
  useEffect(() => {
    console.log("page", page);
    setPageCompleted();
  });
  return <div>TP15AComponent</div>;
};

export default TP15AComponent;
