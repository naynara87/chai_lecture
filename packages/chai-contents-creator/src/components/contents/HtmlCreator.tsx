import styled from "@emotion/styled";
import { HtmlContent, ImageContentComponent } from "chai-ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentProps } from "../../hooks/useCreateContent";
import FileUploader from "../molecules/FileUploader";
import TextCreator from "../molecules/TextCreator";

const HtmlCreatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface HtmlCreatorProps extends ContentProps {}

const HtmlCreator = ({
  onSave,
  id,
  componentList,
  setComponentList,
  handleFocusHtml,
  focusEditor,
}: HtmlCreatorProps) => {
  const [htmlData, setHtmlData] = useState<HtmlContent | undefined>(undefined);
  const [componentIndex, setComponentIndex] = useState<number | undefined>(
    undefined
  );

  const getData = useCallback(() => {
    const htmlContent = componentList.find((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    })?.content as HtmlContent;
    const htmlContentIndex = componentList.findIndex((component) => {
      if (component) {
        return component.id === id;
      } else {
        return undefined;
      }
    });
    setComponentIndex(htmlContentIndex);
    setHtmlData(htmlContent);
  }, [componentList, id]);

  const handleSubmitText = useCallback(
    (text: string, keyName?: string, index?: string | number) => {
      if (componentIndex === undefined) return;
      if (htmlData === undefined) return;
      if (index === undefined) return;
      const copyChooseTextDataArr = JSON.parse(JSON.stringify(htmlData.data));
      copyChooseTextDataArr[0].text = text ?? "";
      const copyComponentList = [...componentList];
      copyComponentList[componentIndex]!.content.data = copyChooseTextDataArr;
      setComponentList(copyComponentList);
    },
    [htmlData, componentList, componentIndex, setComponentList]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  const encodeFileToBase64 = useCallback(
    (fileBlob: Blob, contentIndex: number) => {
      if (componentIndex === undefined) return;

      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        const src = reader.result as string;
        const copyComponentList = JSON.parse(JSON.stringify(componentList));
        const content = copyComponentList[componentIndex]
          ?.content as HtmlContent;
        content.data[contentIndex].icon!.src = src;
        setComponentList(copyComponentList);
      };
    },
    [componentList, componentIndex, setComponentList]
  );

  const imageContent = useMemo(() => {
    if (!htmlData) return;
    if (!htmlData.data?.[0].icon) return;
    const { src } = htmlData.data[0].icon;
    if (htmlData.data[0].icon.src.length > 5) {
      return (
        <div>
          <ImageContentComponent
            imageAlt={src}
            imageSrc={src}
            filter="none"
            isZoom={false}
          />
        </div>
      );
    } else {
      return (
        <FileUploader
          contentIndex={0}
          encodeFileToBase64={encodeFileToBase64}
        />
      );
    }
  }, [encodeFileToBase64, htmlData]);

  return (
    <div>
      <HtmlCreatorWrapper>
        {imageContent}
        <TextCreator
          html={htmlData?.data[0].text ?? ""}
          onSubmitHtml={handleSubmitText}
          id={id + "html" + 0}
          index={0}
          focusEditor={focusEditor}
          onClickHtml={() => {
            if (!handleFocusHtml) return;
            handleFocusHtml(id, "html", 0);
          }}
          textMaxLength={30}
        />
      </HtmlCreatorWrapper>
    </div>
  );
};

export default HtmlCreator;
