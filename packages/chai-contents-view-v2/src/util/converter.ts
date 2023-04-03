import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const { page_id, contents_data, pageArea_type } = pageData;
  return {
    ...JSON.parse(contents_data),
    pageAreaType: pageArea_type,
    id: page_id,
  } as Page;
};
