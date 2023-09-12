const loginScreen = require("../../screenobjects/android/login.screen");
const logoutScreen = require("../../screenobjects/android/logout.screen");

describe("Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah sebelum makan siang", () => {
  it("Login", async () => {
    await loginScreen.midDelayTime();

    await loginScreen.btnSudahPunyaAkun.click();
    await loginScreen.fillEmail.addValue(process.env.USER_EMAIL);
    await loginScreen.fillPassword.addValue(process.env.USER_PASSWORD);
    await loginScreen.btnSumbitLogin.click();
    await loginScreen.shortDelayTime();
    await loginScreen.closePopup();

    await expect(loginScreen.btnBeranda).toBeDisplayed();
  });

  it("Logout", async () => {
    await logoutScreen.btnProfile.click();
    await logoutScreen.scrollToBot();
    await logoutScreen.btnLogout.click();

    await expect(loginScreen.fillEmail).toBeDisplayed();
  });
});
