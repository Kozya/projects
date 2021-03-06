const pushockInsertMountX4 = 169;
const straplockingKitX4 = 556;
const quickLockInsertMountX4 = 582;
const straplockingKitX6 = 834;
const pushockInsertMountX6 = 253;
const quickLockInsertMountX6 = 874;
const straplockingKitX8 = 1112;
const pushockInsertMountX8 = 338;
const quickLockInsertMountX8 = 1165;

const lamelsWhiteBeigeGray3m = 230;
const lamelsWhiteBeigeGray3dot5m = 270;
const lamelsWhiteBeigeGray4m = 293;
const lamelsWhiteBeigeGray4dot5m = 329;
const lamelsWhiteBeigeGray5m = 364;
const lamelsWhiteBeigeGray6m = 418;
const lamelsWhiteBeigeGray7m = 466;
const lamelsWhiteBeigeGray8m = 521;


const lamelsBlue3m = 240;
const lamelsBlue3dot5m = 347;
const lamelsBlue4m = 347;
const lamelsBlue4dot5m = 372;
const lamelsBlue5m = 398;
const lamelsBlue6m = 436;
const lamelsBlue7m = 496;
const lamelsBlue8m = 553;


const lamelsCrystalBlack3m = 589;
const lamelsCrystalBlack3dot5m = 713;
const lamelsCrystalBlack4m = 713;
const lamelsCrystalBlack4dot5m = 891;
const lamelsCrystalBlack5m = 891;
const lamelsCrystalBlack6m = 1070;
const lamelsCrystalBlack7m = 1248;
const lamelsCrystalBlack8m = 1426;


const lamelsColoredSolar3m = 618;
const lamelsColoredSolar3dot5m = 748;
const lamelsColoredSolar4m = 748;
const lamelsColoredSolar4dot5m = 936;
const lamelsColoredSolar5m = 936;
const lamelsColoredSolar6m = 1123;
const lamelsColoredSolar7m = 1310;
const lamelsColoredSolar8m = 1498;

const motorMechanics3x15 = 3441;
const motorMechanics3x21 = 4680;
const motorMechanics3_5x14_5 = 3474;
const motorMechanics3_5x21 = 4350;
const motorMechanics4x13_5 = 3754;
const motorMechanics4x20 = 4680;
const motorMechanics4_5x12_5 = 3528;
const motorMechanics4_5x14_5 = 3878;
const motorMechanics4_5x19_5 = 4350;
const motorMechanics4_5x21 = 5569;
const motorMechanics5x13_5 = 3878;
const motorMechanics5x19 = 4680;
const motorMechanics5x20_5 = 5899;
const motorMechanics6x18_5 = 5290;
const motorMechanics7x18_5 = 6640;
const motorMechanics8x16_5 = 7249;

const motorSolar3x15 = 3705;
const motorSolar3_5x14_5 = 3738;
const motorSolar4x13_5 = 3748;
const motorSolar4_5x12 = 3762;
const motorSolar5x11 = 3868;

const motorManual3x12_5 = 2851;
const motorManual3_5x12_5 = 2871;
const motorManual4x12 = 2894;
const motorManual4_5x11_5 = 2915;
const motorManual5x11 = 2948;

const standPrice = 414;


const lengthObj = {
    3: ["2 ??", "3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??", "19 ??", "20 ??", "21 ??"],
    3.5: ["2 ??", "3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??", "19 ??", "20 ??", "21 ??"],
    4: ["2 ??", "3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??", "19 ??", "20 ??", "21 ??"],
    4.5: ["2 ??", "3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??", "19 ??", "20 ??", "21 ??"],
    5: ["2 ??", "3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??", "19 ??", "20 ??"],
    6: ["3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??"],
    7: ["3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??", "17 ??", "18 ??"],
    8: ["3 ??", "4 ??", "5 ??", "6 ??", "7 ??", "8 ??", "9 ??", "10 ??", "11 ??", "12 ??", "13 ??", "14 ??", "15 ??", "16 ??"],
};



const dataPrice = {
    "32 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: String("???????????????????????? ????????????"),
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "33 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "34 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "35 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "36 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "37 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "38 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "39 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "310 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "311 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "312 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "???",
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "313 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "314 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "315 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x15 + "???",
            motorSolar: motorSolar3x15 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "316 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "317 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "318 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "319 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "320 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "321 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio2: lamelsWhiteBeigeGray3m,
            lamelradio3: lamelsWhiteBeigeGray3m,
            lamelradio4: lamelsBlue3m,
            lamelradio5: lamelsCrystalBlack3m,
            lamelradio6: lamelsCrystalBlack3m,
            lamelradio7: lamelsCrystalBlack3m,
            lamelradio8: lamelsColoredSolar3m,
            mountradio1: straplockingKitX4,
            mountradio2: pushockInsertMountX4,
            mountradio3: quickLockInsertMountX4,

        }],
    "3.52 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: String("???????????????????????? ????????????"),
            motorSolar: motorSolar3_5x14_5,
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.53 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.54 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.55 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.56 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.57 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.58 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.59 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3m,
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.510 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.511 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.512 ??": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "???",
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.513 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.514 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: motorSolar3_5x14_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.515 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x14_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.516 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.517 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.518 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.519 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.520 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "3.521 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics3_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray3dot5m,
            lamelradio2: lamelsWhiteBeigeGray3dot5m,
            lamelradio3: lamelsWhiteBeigeGray3dot5m,
            lamelradio4: lamelsBlue3dot5m,
            lamelradio5: lamelsCrystalBlack3dot5m,
            lamelradio6: lamelsCrystalBlack3dot5m,
            lamelradio7: lamelsCrystalBlack3dot5m,
            lamelradio8: lamelsColoredSolar3dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "42 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: String("???????????????????????? ????????????"),
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "43 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "44 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "45 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "46 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "47 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "48 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "49 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "410 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "411 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "412 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "???",
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,
        }],
    "413 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: motorSolar4x13_5 + "???",
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "414 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "415 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x13_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "416 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,
        }],
    "417 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "418 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "419 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "420 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "421 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4x20 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4m,
            lamelradio2: lamelsWhiteBeigeGray4m,
            lamelradio3: lamelsWhiteBeigeGray4m,
            lamelradio4: lamelsBlue4m,
            lamelradio5: lamelsCrystalBlack4m,
            lamelradio6: lamelsCrystalBlack4m,
            lamelradio7: lamelsCrystalBlack4m,
            lamelradio8: lamelsColoredSolar4m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "4.52 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: String("???????????????????????? ????????????"),
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "4.53 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.54 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.55 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.56 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.57 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.58 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.59 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.510 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.511 ??": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "???",
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.512 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x12_5 + "???",
            motorSolar: motorSolar4_5x12 + "???",
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.513 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x14_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.514 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x14_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.515 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x19_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.516 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x19_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.517 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x19_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.518 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x19_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.519 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x19_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.520 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "4.521 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics4_5x21 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray4dot5m,
            lamelradio2: lamelsWhiteBeigeGray4dot5m,
            lamelradio3: lamelsWhiteBeigeGray4dot5m,
            lamelradio4: lamelsBlue4dot5m,
            lamelradio5: lamelsCrystalBlack4dot5m,
            lamelradio6: lamelsCrystalBlack4dot5m,
            lamelradio7: lamelsCrystalBlack4dot5m,
            lamelradio8: lamelsColoredSolar4dot5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "52 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: String("???????????????????????? ????????????"),
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,

        }],
    "53 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "54 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "55 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "56 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "57 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "58 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "59 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "510 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "511 ??": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "???",
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: motorSolar5x11 + "???",
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX6,
            mountradio2: pushockInsertMountX6,
            mountradio3: quickLockInsertMountX6,


        }],
    "512 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "513 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x13_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "514 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "515 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "516 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "517 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "518 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "519 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x19 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "520 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics5x20_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray5m,
            lamelradio2: lamelsWhiteBeigeGray5m,
            lamelradio3: lamelsWhiteBeigeGray5m,
            lamelradio4: lamelsBlue5m,
            lamelradio5: lamelsCrystalBlack5m,
            lamelradio6: lamelsCrystalBlack5m,
            lamelradio7: lamelsCrystalBlack5m,
            lamelradio8: lamelsColoredSolar5m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],

    "63 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "64 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "65 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "66 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "67 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "68 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "69 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "610 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "611 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "612 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "613 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "614 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "615 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "616 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "617 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "618 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics6x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray6m,
            lamelradio2: lamelsWhiteBeigeGray6m,
            lamelradio3: lamelsWhiteBeigeGray6m,
            lamelradio4: lamelsBlue6m,
            lamelradio5: lamelsCrystalBlack6m,
            lamelradio6: lamelsCrystalBlack6m,
            lamelradio7: lamelsCrystalBlack6m,
            lamelradio8: lamelsColoredSolar6m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "73 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "74 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "75 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "76 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "77 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "78 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "79 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "710 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "711 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "712 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "713 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "714 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "715 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "716 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "717 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "718 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics7x18_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray7m,
            lamelradio2: lamelsWhiteBeigeGray7m,
            lamelradio3: lamelsWhiteBeigeGray7m,
            lamelradio4: lamelsBlue7m,
            lamelradio5: lamelsCrystalBlack7m,
            lamelradio6: lamelsCrystalBlack7m,
            lamelradio7: lamelsCrystalBlack7m,
            lamelradio8: lamelsColoredSolar7m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "83 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "84 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "85 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "86 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "87 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "88 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "89 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "810 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "811 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "812 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "813 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "814 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,


        }],
    "815 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],
    "816 ??": [
        {
            stands: standPrice,
            motorManual: String("???????????????????????? ????????????"),
            motorMechanics: motorMechanics8x16_5 + "???",
            motorSolar: String("???????????????????????? ????????????"),
            lamelradio1: lamelsWhiteBeigeGray8m,
            lamelradio2: lamelsWhiteBeigeGray8m,
            lamelradio3: lamelsWhiteBeigeGray8m,
            lamelradio4: lamelsBlue8m,
            lamelradio5: lamelsCrystalBlack8m,
            lamelradio6: lamelsCrystalBlack8m,
            lamelradio7: lamelsCrystalBlack8m,
            lamelradio8: lamelsColoredSolar8m,
            mountradio1: straplockingKitX8,
            mountradio2: pushockInsertMountX8,
            mountradio3: quickLockInsertMountX8,

        }],



};
