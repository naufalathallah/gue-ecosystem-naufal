const { login, logout } = require("../../screenobjects/android/helper");

describe("Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah sebelum makan siang", () => {
  it("Login", async () => {
    await login();
  });

  it("Logout", async () => {
    await logout();
  });
});
