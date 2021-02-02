let mage = new HeroConstructor("Mag", 90, 20, 30, 75);
let archer = new HeroConstructor("Łucznik", 80, 20, 70, 10);
let knight = new HeroConstructor("Rycerz", 65, 80, 30, 30);

var heroNumber = 1

let leftArrow = document.querySelector("#left-hero");
let rightArrow = document.querySelector("#right-hero");
let startButton = document.querySelector(".btn-start");

const heroExpText1 = document.querySelector("#exp-text1");const heroExpText2 = document.querySelector("#exp-text2");const heroExpText3 = document.querySelector("#exp-text3");const heroExpText4 = document.querySelector("#exp-text4");
let heroExp1 = document.querySelector(".exp1");
let heroExp2 = document.querySelector(".exp2");
let heroExp3 = document.querySelector(".exp3");
let heroExp4 = document.querySelector(".exp4");
let heroName = document.querySelector(".hero-name");
let heroDesc = document.querySelector(".desc");
let heroImg = document.querySelector("#hero-img");
let heroTextToFunction;

let nickInput = document.querySelector("#nick");

const mainH1 = document.querySelector(".room-text");

const playerClass = document.querySelector(".player-class");
const playerLevelBox = document.querySelector(".player-lvl");

const menuBtn1 = document.querySelector("#btn1");
const menuBtn2 = document.querySelector("#btn2");
const menuBtn3 = document.querySelector("#btn3");
const menuBtn4 = document.querySelector("#btn4");

const buildings = document.querySelectorAll(".menu-block");
const btn1Buildings = document.querySelector(".btn1-buildings");
const btn2Buildings = document.querySelector(".btn2-buildings");
const btn3Buildings = document.querySelector(".btn3-buildings");
const btn4Buildings = document.querySelector(".btn4-buildings");

const expBar1 = document.querySelector(".exp-menu-1");
const expBar2 = document.querySelector(".exp-menu-2");
const expBar3 = document.querySelector(".exp-menu-3");
const expBar4 = document.querySelector(".exp-menu-4");

const expBarText1 = document.querySelector("#exp-menu-text1");
const expBarText2 = document.querySelector("#exp-menu-text2");
const expBarText3 = document.querySelector("#exp-menu-text3");
const expBarText4 = document.querySelector("#exp-menu-text4");

const upgradePointsTxt = document.querySelector(".upgrade-points");

const upgradeBtn1 = document.querySelector("#strength");
const upgradeBtn2 = document.querySelector("#health");
const upgradeBtn3 = document.querySelector("#skill");
const upgradeBtn4 = document.querySelector("#mana");

const buyBonus1Const = document.querySelector("#buy-const-bonus1");
const buyBonus2Const = document.querySelector("#buy-const-bonus2");
const buyBonus3Const = document.querySelector("#buy-const-bonus3");