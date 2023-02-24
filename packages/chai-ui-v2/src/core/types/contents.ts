export type Content = VideoContentData | ImageContentData;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Meta = Record<string, any>;

export type VideoContentData = {
  type: "video";
  data: {
    src: string;
  };
  meta?: Meta;
};

export type ImageContentData = {
  type: "image";
  data: {
    src: string;
  };
  meta?: Meta;
};
