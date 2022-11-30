import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { TPIframe } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateIframeLayout from "../Layouts/TemplateIframeLayout";
import TPIframeLayout from "../Layouts/TPIframeLayout";

const IframeHeader = styled.div``;

interface TPIframeComponentProps extends TemplateProps {}
const TPIframeComponent = ({ setPageCompleted, page }: TPIframeComponentProps) => {
  const thisPage = page as TPIframe;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);
  return (
    <TemplateIframeLayout>
      <IframeHeader />
      <TPIframeLayout>
        <iframe
          src={thisPage.template.url}
          title={thisPage.template.url}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </TPIframeLayout>
    </TemplateIframeLayout>
  );
};

export default TPIframeComponent;
