import { getCookie, setCookie } from "../cookie";

describe("쿠키 함수 테스트", () => {
  beforeEach(() => {
    document.cookie = "";
  });

  it("쿠키가 없을때 쿠키를 가져옴", () => {
    expect(getCookie("user")).toBe(undefined);
  });

  it("쿠키 저장 및 쿠키를 가져옴", () => {
    const user = { name: "John", id: 1 };
    setCookie("user", user, {});
    expect(getCookie("user")).toEqual(user);
  });
});
