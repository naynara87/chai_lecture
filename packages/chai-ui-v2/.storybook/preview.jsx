// import "../src/styles/scss/ui.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/**
 * NOTE : emotion globalStyle 설정
 */
export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];
