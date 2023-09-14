import { validateURL } from "../string";

describe("validateUrl 함수 테스트", () => {
  it("url에 http가 있을 때", () => {
    const url = "https://www.naver.com";

    const result = validateURL(url);
    expect(result).toBe(true);
  });

  it("url에 http가 없을 때", () => {
    const url = "www.naver.com";

    const result = validateURL(url);
    expect(result).toBe(false);
  });
});
