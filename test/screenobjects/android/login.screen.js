class LoginScreen {
  async midDelayTime() {
    await driver.pause(8000);
  }

  async shortDelayTime() {
    await driver.pause(3000);
  }

  get btnSudahPunyaAkun() {
    return $("~textCreateAccount");
  }

  get fillEmail() {
    return $("~inputEmail");
  }

  get fillPassword() {
    return $("~inputPassword");
  }

  get btnSumbitLogin() {
    return $("~btnSubmit");
  }

  async closePopup() {
    await driver.back();
    await driver.back();
  }

  get btnBeranda() {
    return $('//*[@text="Beranda"]');
  }
}
module.exports = new LoginScreen();
