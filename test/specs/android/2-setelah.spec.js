const { login, logout } = require("../../screenobjects/android/helper");
const inputGulaDarahScreen = require("../../screenobjects/android/input-gula-darah.screen");
const rekamanScreen = require("../../screenobjects/android/rekaman.screen");

describe("Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah 1-2 jam setelah makan siang", () => {
  it("Given Saya melakukan login", async () => {
    await login();
  });

  it("When Saya mengakses halaman input", async () => {
    await rekamanScreen.btnRekaman.click();
    await rekamanScreen.shortDelayTime();
    await expect(rekamanScreen.btnMasukanGulaDarah).toBeDisplayed();

    await rekamanScreen.btnMasukanGulaDarah.click();
    await rekamanScreen.shortDelayTime();
    await expect(inputGulaDarahScreen.textInputGulaDarah).toBeDisplayed();
  });

  it("And Saya mengisi pemeriksaan gula darah 1-2 Jam Setelah Makan Siang", async () => {
    await inputGulaDarahScreen.pickJenisGula.click();
    await inputGulaDarahScreen.setJenisGulaDarah("1-2 Jam Setelah Makan Siang");
    await inputGulaDarahScreen.pickWaktu.click();
    await inputGulaDarahScreen.btnConfirmWaktu.click();
    await inputGulaDarahScreen.fillGulaDarah.addValue(
      process.env.USER_GULA_DARAH
    );
    await inputGulaDarahScreen.fillMakanSiang.addValue(
      process.env.USER_MAKAN_SIANG
    );
    await inputGulaDarahScreen.btnSelesai.click();
    await expect(inputGulaDarahScreen.textKonfirmasiData).toBeDisplayed();
    await inputGulaDarahScreen.btnBenar.click();
    await expect(inputGulaDarahScreen.textBerhasil).toBeDisplayed();
  });

  it("Logout", async () => {
    await logout();
  });
});
