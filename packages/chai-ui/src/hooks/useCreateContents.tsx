import { MutableRefObject, useCallback, useState } from "react";
import { ContentPage } from "../types/pageTemplate";
import produce from "immer";

interface PageDataType {
  type: ContentPage["template"]["type"];
  contents: ContentPage["template"]["contents"];
}

const useCreateContents = (contentType: ContentPage["template"]["type"] | undefined) => {
  const [pageData, setPageData] = useState<PageDataType>({
    type: contentType!,
    contents: [],
  });

  const addContent = useCallback((type: string, inputText: MutableRefObject<string>) => {
    const stringTypeInputText = inputText as unknown as string;
    switch (type) {
      case "글자":
        setPageData(
          produce(
            (draft) =>
              (draft.contents[0] = {
                type: "html",
                data: [
                  {
                    text: stringTypeInputText,
                  },
                ],
              }),
          ),
        );
        return;
      case "사진":
        return {
          type: "images",
          data: [
            {
              src: stringTypeInputText,
            },
          ],
        };
      case "음원":
        return {
          type: "audio",
          data: [
            {
              src: stringTypeInputText,
            },
          ],
        };
      case "영상":
        return {
          type: "video",
          data: [
            {
              src: stringTypeInputText,
            },
          ],
        };
    }
  }, []);

  return { pageData, addContent };
};

export default useCreateContents;
