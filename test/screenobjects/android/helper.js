const loginScreen = require("./login.screen");
const logoutScreen = require("./logout.screen");

async function login() {
  await loginScreen.midDelayTime();
  await loginScreen.btnSudahPunyaAkun.click();
  await loginScreen.fillEmail.addValue(process.env.USER_EMAIL);
  await loginScreen.fillPassword.addValue(process.env.USER_PASSWORD);
  await loginScreen.btnSumbitLogin.click();
  await loginScreen.shortDelayTime();
  await loginScreen.closePopup();
  await expect(loginScreen.btnBeranda).toBeDisplayed();
}

async function logout() {
  await logoutScreen.btnProfile.click();
  await logoutScreen.shortDelayTime();
  await logoutScreen.scrollToBot();
  await logoutScreen.btnLogout.click();
  await expect(loginScreen.fillEmail).toBeDisplayed();
}

module.exports = { login, logout };
