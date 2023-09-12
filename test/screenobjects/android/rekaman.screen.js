class RekamanScreen {
  get btnRekaman() {
    return $('//*[@text="Rekaman"]');
  }

  async shortDelayTime() {
    await driver.pause(2000);
  }

  get btnMasukanGulaDarah() {
    return $(
      '//android.view.ViewGroup[@content-desc="touchInputBGFood"]/android.widget.ImageView'
    );
  }

  get btnManual() {
    return $("~btnPilih5fbf8ac1566a0f6404af27a8");
  }
}
module.exports = new RekamanScreen();
