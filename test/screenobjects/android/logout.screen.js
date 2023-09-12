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
}
module.exports = new LogoutScreen();
