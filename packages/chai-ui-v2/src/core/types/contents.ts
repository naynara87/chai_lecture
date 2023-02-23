export type Content = VideoContent;

export type VideoContent = {
  type: "video";
  data: {
    src: string;
  }[];
};
