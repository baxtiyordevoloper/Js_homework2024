// Uydan ishxonagacha qadamlarim soni nechta bo'lishini bilmoqchiman
// Start
// Finish
// Length
// for ( start ; finish; length)
// for(i = 1; i<10; i +=2) 
//----------------------------------------------------------
// for 1
// let k = 12;
// let n = 5;

// for(let i = 0; i < n; i++){
//   console.log(k);
// }
// ----------------------------------------------
// for 2

// // a va b sonlari
// let a = 1;
// let b = 7;

// // Sonlar sonini hisoblovchi o'zgaruvchi
// let count = 0;

// // For sikli yordamida barcha sonlarni chiqaramiz
// for (let i = a; i <= b; i++) {
//   console.log(i); // Har bir sonni chiqarish
//   count++;        // Sonni sanash

// }

// // Umumiy sonlar sonini chiqarish
// console.log("Jami sonlar soni:", count);

// ----------------------------------------------------------
// For 3
// let a = 1;
// let b = 7;

// let count = 0;
// for(i = 7; i >=1; i--){
//   console.log(i);
//   count++;

// }
// console.log(`Jami sonlar soni:${count}`);
// ----------------------------------------------------------------
// For 4
// let k = 32000;
// for(i = 1; i <= 10; i++){
//   console.log(i * k);

// }
// -----------------------------------------
// For 5
// let k = 32000;

// for(let i = 0.1; i <=1; i += 0.1){
//   console.log(i.toFixed(1) * k);
// }
//--------------------------------------

// For 6
// let k = 32000;

// for(let i = 1.2; i <= 2; i = i + 0.2){
//   console.log(i.toFixed(1) * k);
// }

// 2 usul
// let kg = 2000;

// // Narxlarni hisoblash va chiqarish
// for (let weight = 1.2; weight <= 2; weight += 0.2) {
//     let price = kg * weight;
//     console.log(`${weight.toFixed(1)} kg konfet narxi: ${price.toFixed()} so'm`);
// }
//-------------------------------------------------------------
// For 7

// let a = 1;
// let b = 5;

// let total = 0; umumiy ye'gindi

// for(i = 1; i<=5; i++){
//   console.log(i);
//   total += i; // umumiy ye'gindi
// }
// console.log(`Yeg'indi: ${total}`);// 15
//-------------------------------------------------------------
// For 8
// let a = 1;
// let b = 3;

// let multiplication = 1; // ko'paytma
// for(i = 1; i <= 3; i++){
//   multiplication *= i;
// }
// console.log(`ko'paytma:${multiplication}`);

//-------------------------------------------------------------
// For 9
// let a = 1;
// let b = 3;
// let square = 0; // kvadrat +

// for(i = a; i<=b; i++){
//   console.log(i*i);
//   square += i * i ;
// }
// console.log(`sum of squares: ${square}`); // kvadratlar yig'indisi : 14
//------------------------------------------------------------------
// For 10
// let n = 3;
// let s = 0;

// for(let i = 1; i <= n; i++){
//   s += 1/i; 
//   console.log(i);

// }
// console.log(s);// 1.8333333333333333
//------------------------------------------------------------------
// For 11
// let n = 3;
// let s = 0;
// for(i = n; i<= 2 * n; i++){
//   s += i * i;
//   console.log(i);

// }
// console.log("Yig'indi: " +s);
// ----------------------------------------------------------
// For 12
// let n = 5;
// let S = 1;

// // Ko'paytmani hisoblash
// for (let i = 1; i <= n; i++) {
//     S *= (1 + i / 10); // Har bir qadamda ko'paytirish
// }

// // Natijani chiqarish
// console.log("Ko'paytma S = " + S.toFixed(2));
// ----------------------------------------------------------
// For 14
// let n = 5;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//     s += (2 * i - 1);
//     console.log(i);

// }

// console.log(s);// 25

// ----------------------------------------------------------
// For 15
// let a = 5;
// let n = 2
// let s = 1;

// for (let i = 1; i <= n; i++) {
//     s = s*a;
// }

// console.log(s);

// ----------------------------------------------------------
//  For 16
// let a = 2;
// let n = 3;
// let s = 1;

// for (let i = 1; i <= n; i++) {
//   s *= a;

//   console.log("a^" + i + " = " + s);
// }

// ----------------------------------------------------------
//  For 17
// let a = 2;
// let n = 3;
// let s = 1;
// let yigindi = 1;


// for (let i = 1; i <= n; i++) {
//   s *= a;
//   yigindi += s

//   console.log("a^" + i + " = " + s);
// }
// console.log(`yigindi: ${yigindi}`); // yigindi: 15
// ----------------------------------------------------------
// For 19

// let n = 4;
// let s = 1;

// for(i = 1; i <= n; i++){
//   s *= i;
// }
// console.log(s);

//-----------------------------------------------
// For 20

// let n = 5;
// let s = 0;

// for(let k = 1; k <= n; k++){
//   let fact = 1; 
  
//   for(let i = 1; i <= k; i++){
//     fact *= i;
//   }
//   s += fact;
 
// }
// console.log(s);
//--------------------------

// For 20 
// let n = 5;
// for(let i = 1; i<=n; i++){
//   let k = 1;
  
//   for(let j = 1; j<=i; i++){
//     k *= j;
//   }
//   console.log(k);
  
// }

// For 20;
// let n = 5;
// let s = 1;

// for (let k = 1; k <= n; k++) {
//     let fact = 1; // k! hisoblash
//     for (let i = 1; i <= k; i++) {
//         fact *= i;
//     }
//     s += 1 / fact; // 1/(k!) yig‘indiga qo‘shish
// }

// console.log("Yig'indi S = " + s);
