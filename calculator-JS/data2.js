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
    3: ["2 м", "3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м", "19 м", "20 м", "21 м"],
    3.5: ["2 м", "3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м", "19 м", "20 м", "21 м"],
    4: ["2 м", "3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м", "19 м", "20 м", "21 м"],
    4.5: ["2 м", "3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м", "19 м", "20 м", "21 м"],
    5: ["2 м", "3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м", "19 м", "20 м"],
    6: ["3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м"],
    7: ["3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м", "17 м", "18 м"],
    8: ["3 м", "4 м", "5 м", "6 м", "7 м", "8 м", "9 м", "10 м", "11 м", "12 м", "13 м", "14 м", "15 м", "16 м"],
};



const dataPrice = {
    "32 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: String("Неподходящий размер"),
            motorSolar: motorSolar3x15 + "€",
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
    "33 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "34 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "35 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "36 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "37 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "38 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "39 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "310 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "311 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "312 м": [
        {
            stands: standPrice,
            motorManual: motorManual3x12_5 + "€",
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "313 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "314 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "315 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x15 + "€",
            motorSolar: motorSolar3x15 + "€",
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
    "316 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "317 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "318 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "319 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "320 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "321 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.52 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: String("Неподходящий размер"),
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
    "3.53 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.54 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.55 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.56 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.57 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.58 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.59 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.510 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.511 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.512 м": [
        {
            stands: standPrice,
            motorManual: motorManual3_5x12_5 + "€",
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.513 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.514 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: motorSolar3_5x14_5 + "€",
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
    "3.515 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x14_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.516 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.517 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.518 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.519 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.520 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "3.521 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics3_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "42 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: String("Неподходящий размер"),
            motorSolar: motorSolar4x13_5 + "€",
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
    "43 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "44 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "45 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "46 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "47 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "48 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "49 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "410 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "411 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "412 м": [
        {
            stands: standPrice,
            motorManual: motorManual4x12 + "€",
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "413 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: motorSolar4x13_5 + "€",
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
    "414 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "415 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x13_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "416 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "417 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "418 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "419 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "420 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "421 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4x20 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.52 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: String("Неподходящий размер"),
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.53 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.54 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.55 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.56 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.57 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.58 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.59 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.510 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.511 м": [
        {
            stands: standPrice,
            motorManual: motorManual4_5x11_5 + "€",
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.512 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x12_5 + "€",
            motorSolar: motorSolar4_5x12 + "€",
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
    "4.513 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x14_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.514 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x14_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.515 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x19_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.516 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x19_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.517 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x19_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.518 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x19_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.519 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x19_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.520 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "4.521 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics4_5x21 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "52 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: String("Неподходящий размер"),
            motorSolar: motorSolar5x11 + "€",
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
    "53 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "54 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "55 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "56 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "57 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "58 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "59 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "510 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "511 м": [
        {
            stands: standPrice,
            motorManual: motorManual5x11 + "€",
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: motorSolar5x11 + "€",
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
    "512 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "513 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x13_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "514 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "515 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "516 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "517 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "518 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "519 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x19 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "520 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics5x20_5 + "€",
            motorSolar: String("Неподходящий размер"),
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

    "63 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "64 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "65 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "66 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "67 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "68 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "69 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "610 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "611 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "612 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "613 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "614 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "615 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "616 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "617 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "618 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics6x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "73 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "74 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "75 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "76 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "77 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "78 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "79 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "710 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "711 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "712 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "713 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "714 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "715 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "716 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "717 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "718 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics7x18_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "83 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "84 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "85 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "86 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "87 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "88 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "89 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "810 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "811 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "812 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "813 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "814 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "815 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
    "816 м": [
        {
            stands: standPrice,
            motorManual: String("Неподходящий размер"),
            motorMechanics: motorMechanics8x16_5 + "€",
            motorSolar: String("Неподходящий размер"),
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
