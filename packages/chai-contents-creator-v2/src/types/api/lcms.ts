export type SaveContentResponse = {
  code: number; // status code : 200
  message: string; // "성공"
};

export type SaveContentRequest = {
  content_data: string; // JSON.stringify(page)
  content_id: string;
  page_id: string;
  turn_id: string;
};
