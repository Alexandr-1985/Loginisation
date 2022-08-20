import { authAPI } from "./api";

test("check auth User", () => {
  return authAPI.login("alex@example.com", "password", true).then((data) => {
    expect(data).toStrictEqual({ id: 1, login: "alex@example.com" });
  });
});
