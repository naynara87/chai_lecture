import { RecoilRoot, RecoilState } from "recoil";
import "../src/assets/ui.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    </>
  ),
];
