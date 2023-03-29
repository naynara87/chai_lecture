import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const { page_id, contents_data } = pageData;
  return {
    id: page_id,
    ...JSON.parse(contents_data),
  } as Page;
};
