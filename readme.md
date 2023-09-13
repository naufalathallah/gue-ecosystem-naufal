# Documentation guide

the repository contains:

1. Automated test Teman Diabetes on Android description
2. Manual test cases
3. Recording of running automation test

## Stack used

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-%236D44A1.svg?style=flat&logo=WebdriverIO&logoColor=white) ![Appium](https://img.shields.io/badge/Appium-%23343FC9.svg?style=flat&logo=Appium&logoColor=white) ![Mocha](https://img.shields.io/badge/Mocha-%238D6748.svg?style=flat&logo=Mocha&logoColor=white)

## Automation Detail

Total scenario:

```
3
```

## "spec" Reporter:

---

[undefined Android #0-0] Running: undefined on Android
[undefined Android #0-0] Session ID: 02347fe0-4a78-483d-8c48-fa07318cd200
[undefined Android #0-0]
[undefined Android #0-0] » \test\specs\android\1-sebelum.spec.js
[undefined Android #0-0] Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah sebelum makan siang  
[undefined Android #0-0] ✓ Given Saya melakukan login
[undefined Android #0-0] ✓ When Saya mengakses halaman input
[undefined Android #0-0] ✓ And Saya mengisi pemeriksaan gula darah sebelum makan siang
[undefined Android #0-0] ✓ Logout
[undefined Android #0-0]
[undefined Android #0-0] 4 passing (48.9s)

---

[undefined Android #0-1] Running: undefined on Android
[undefined Android #0-1] Session ID: eab17337-cc05-4b5b-a481-74b2dc9a914f
[undefined Android #0-1]
[undefined Android #0-1] » \test\specs\android\2-setelah.spec.js
[undefined Android #0-1] Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah 1-2 jam setelah makan siang
[undefined Android #0-1] ✓ Given Saya melakukan login
[undefined Android #0-1] ✓ When Saya mengakses halaman input
[undefined Android #0-1] ✓ And Saya mengisi pemeriksaan gula darah 1-2 Jam Setelah Makan Siang
[undefined Android #0-1] ✓ Logout
[undefined Android #0-1]
[undefined Android #0-1] 4 passing (46.7s)

---

[undefined Android #0-2] Running: undefined on Android
[undefined Android #0-2] Session ID: 867effbe-830f-4311-88d4-328598853316
[undefined Android #0-2]
[undefined Android #0-2] » \test\specs\android\3-lainnya.spec.js
[undefined Android #0-2] Sebagai user teman diabetes, saya dapat mencatat gula darah manual dengan pemilihan jenis pemeriksaan gula darah 1-2 jam setelah makan siang
[undefined Android #0-2] ✓ Given Saya melakukan login
[undefined Android #0-2] ✓ When Saya mengakses halaman input
[undefined Android #0-2] ✓ And Saya mengisi pemeriksaan gula darah Lainnya
[undefined Android #0-2] ✓ Logout
[undefined Android #0-2]
[undefined Android #0-2] 4 passing (46.9s)

Spec Files: 3 passed, 3 total (100% completed) in 00:03:10

## Want to run it by yourself?

steps:
```
Clone repo
```
```
npm install
```
```
npm install appium --save-dev
```
```
npm i ts-node --save-dev
```
```
remove "type:module" from the package.json file
change export const config to exports.config in wdio.conf.js
```
```
change .env.example to .env
add user email and password
```
```
npx wdio --spec ./test/specs/android/1-sebelum.spec.js ./test/specs/android/2-setelah.spec.js ./test/specs/android/3-lainnya.spec.js
```

## Manual test cases

Manual test cases using ![Cucumber](https://img.shields.io/badge/Cucumber-%235B2063.svg?style=flat&logo=Cucumber&logoColor=white) style. The excel can be downloaded from here:

```
manual/Tech test manual - naufal.xlsx
```

or

```
https://docs.google.com/spreadsheets/d/1rZtZTeMNf4pO7i8egVn5xq9rSRqYTBYN/edit?usp=drive_link&ouid=118163462700119744611&rtpof=true&sd=true
```

## Automation Record

Can be downloaded from:

```
https://drive.google.com/file/d/17aYJXVI60T5F_pch5Z5FFgs_qGUBgShh/view?usp=sharing
```
