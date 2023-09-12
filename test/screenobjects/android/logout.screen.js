class LogoutScreen {
  get btnProfile() {
    return $('//*[@text="Profil"]');
  }

  async scrollToBot() {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
  }

  get btnLogout() {
    return $('//*[@text="Logout"]');
  }
  async shortDelayTime() {
    await driver.pause(2000);
  }
}
module.exports = new LogoutScreen();
