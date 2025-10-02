// d- task

function checkText(first_text, second_text) {
  if (first_text.length !== second_text.length) return false;

  // Harflarni alohida qilib saralash va taqqoslash
  let first_example = first_text.split("").sort().join("");
  let second_example = second_text.split("").sort().join("");

  return first_example === second_example;
}

console.log(checkText("nimadur", "nimadru"));

// // C -task

// const moment = require("moment");

// class Shop {
//   non = 0;
//   cola = 0;
//   lagmon = 0;

//   qoldiq() {
//     console.log(
//       "Hozzir",
//       moment().format("HH:mm"),
//       `da do'konda ${this.non} ta non, ${this.cola} ta cola va ${this.lagmon} ta lagmon bor`
//     );
//   }

//   qabul(non, cola, lagmon) {
//     this.non += non;
//     this.cola += cola;
//     this.lagmon += lagmon;
//     console.log(
//       `do'konga ${this.non + non}  ta non, ${this.cola + cola} ta cola va ${
//         this.lagmon + lagmon
//       } ta lagmon qabul qilindi `
//     );
//   }

//   sotish(non, cola, lagmon) {
//     this.non -= non;
//     this.cola -= cola;
//     this.lagmon -= lagmon;
//     console.log(
//       `do'konda ${this.non - non}  ta non, ${this.cola - cola} ta cola va ${
//         this.lagmon - lagmon
//       } ta lagmon qoldi `
//     );
//   }
// }

// const shop = new Shop();

// shop.qabul(2, 3, 5);
// shop.qoldiq();

// shop.qoldiq();

// B - task

// function countDigitals(text) {
//   if ((howmuch = text.match(/\d/g))) {
//     // (/\w/g) - bu har bir simbolni ushlab berarkan
//     // (/\w.(s)/g) - bu 's' harfini ushlab beryabti
//     // (/\D/g)  - bu har bir harf larni ushlab beryabti
//     // (/\d+/g)  - bu har bir son larni ushlab beryabti (raqamlarni emas)
//     console.log(howmuch.length);
//   } else {
//     console.log("bu textda raqamlar qatnashmagan.");
//   }
// }

// countDigitals("as87ds87dsf78asd78");

//A-TASK

// let howmuch;

// function countLetter(letter, word) {
//   if ((howmuch = word.split(letter).length - 1)) {
//     console.log(howmuch);
//   } else {
//     console.log("bunday harf mavjud emas");
//   }
// }

// countLetter("i", "zigzag");
// console.log("----------------------");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boring", // 0-20
//   "togri boshlig tanlang va koproq hato qiling", // 20-30
//   "uzingiza ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// //CALLBACK functions
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// call via : then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// //call via: asyn/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
