let a = 241;
let x = Math.floor(a/100);//2
let y = Math.floor((a%100)/10);//3
let z = a % 10;//0

let qoshish = x+y+z;
let kopaytirish = x*y*z;

console.log(qoshish, kopaytirish);















// Berilgan son
// let number = 230;

// // Raqamlarni ajratish
// let digits = number.toString().split('').map(Number);

// // Yig'indini hisoblash
// let sum = digits.reduce((acc, curr) => acc + curr, 0);

// // Ko'paytmani hisoblash
// let product = digits.reduce((acc, curr) => acc * curr, 1);

// // Natijalarni chiqarish
// console.log("Yig'indi:", sum);
// console.log("Ko'paytma:", product);

// // Berilgan son
// let number = 230;

// // Yig'indini va ko'paytmasini boshlang'ich qiymatlari
// let sum = 0;
// let product = 1;

// // Raqamlarni ajratish va hisoblash
// while (number > 0) {
//     let digit = number % 10; // Oxirgi raqamni olish
//     sum += digit;             // Yig'indiga qo'shish
//     product *= digit;         // Ko'paytmaga ko'shish
//     number = Math.floor(number / 10); // Raqamni qisqartirish
// }

// // Natijalarni chiqarish
// console.log("Yig'indi:", sum);
// console.log("Ko'paytma:", product);
