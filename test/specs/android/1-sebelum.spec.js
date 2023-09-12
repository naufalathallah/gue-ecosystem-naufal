const { login, logout } = require("./path/to/helper");

describe("Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah sebelum makan siang", () => {
  it("Login", async () => {
    await login();
  });

  it("Logout", async () => {
    await logout();
  });
});
