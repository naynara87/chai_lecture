import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const { page_id, contents_data } = pageData;
  return {
    ...JSON.parse(contents_data),
    id: page_id,
  } as Page;
};
