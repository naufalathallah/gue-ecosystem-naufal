class InputGulaDarahScreen {
  get textInputGulaDarah() {
    return $('//*[@text="INPUT GULA DARAH"]');
  }

  get pickJenisGula() {
    return $("~pickerJenisGulaDarah");
  }

  async setJenisGulaDarah(pilihan) {
    try {
      await $(`//*[@text="${pilihan}"]`).click();
    } catch (error) {
      console.error(`Gagal menetapkan jenis gula darah: ${error}`);
    }
  }

  get pickWaktu() {
    return $("~inputWaktuMakan");
  }

  get btnConfirmWaktu() {
    return $("~btn-confirm");
  }

  get fillGulaDarah() {
    return $("~inputGulaDarah");
  }

  get fillSarapan() {
    return $("~inputFood1");
  }

  get fillSnack() {
    return $("~inputFood2");
  }

  get btnSelesai() {
    return $("~btnSelesai");
  }

  get textKonfirmasiData() {
    return $('//*[@text="KONFIRMASI DATA"]');
  }

  get btnBenar() {
    return $("~touchSendData");
  }

  get textBerhasil() {
    return $('//*[@text="Berhasil"]');
  }

  get fillMakanSiang() {
    return $("~inputFood1");
  }
}
module.exports = new InputGulaDarahScreen();
