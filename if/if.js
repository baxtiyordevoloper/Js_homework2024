// If 1

/*let a = 4;
let b = -9;
let c = 23;

if(a<b && a<c){
  console.log(a);
} else if(b<a && b<c){
 console.log(b);
} else{
  console.log(c);//-9
} */

// -----------------------------------------------

// If 2

/*let a = 40;
let b = -20;
let c = 23;

if ((a > b && a < c) || (a < b && a > c)) {
  console.log(a);
} else if ((b > a && b < c) || (b < a && b > c)) {
  console.log(b);
} else {
  console.log(c); //23
} */

// -----------------------------------------------
// Integer 3
/*et a = 10;
let b = -4;

if(a!=b && a>b){
  console.log(a);
}else if(b!=a && b>a){
  console.log(b);
}else{
  console.log(0);
} */

// ----------------------------------------------------------
// If 4
/*let x = 7;
let y = 3;

if (x > 0 && y > 0) {
    console.log("1 chorak:", x, y);
} else if (x < 0 && y > 0) {
    console.log("2 chorak:", x, y);
} else if (x < 0 && y < 0) {
    console.log("3 chorak:", x, y);
} else {
    console.log("4 chorak:", x, y);
} */

// ----------------------------------------------------------
// If 5

/*let x = -5;

let fx;
if(x > 0){
  fx = 2*Math.sin(x)
}else{
  fx = x-6;
}
console.log(fx);*/   //-11

// ----------------------------------------------------------

// If 6
/* let x =-12;
let fx;

if(x < -2 || x > 2){
  fx = 2*x;
}
else{
  fx = -3*x
}
console.log(fx); */ //-24

// ----------------------------------------------------------
// If 7

/*let x = -9;
let fx;

if(x<0){
  fx = -x;
}if(0<x && x<2 ){
  fx = Math.pow(x,2);
}if(x>2){
  fx = 4
}
console.log(fx); */ // 2.25

// ----------------------------------------------------------

// If 8

/*let a = 7;
let b = 4;
let c = 2;

if(a<(b+c)){
  console.log("Yes");
}else{
  console.log("No"); 
} */

// ----------------------------------------------------------

// If 9

/*let temp = 58;//Very Hot
if(temp<0){
  console.log("Freezing");
}else if(temp <=10){
  console.log("Very Cold");
}else if (temp <= 20){
  console.log("Cold");
}else if(temp <= 30){
  console.log("Normal");
}else if(temp <= 40){
  console.log("Hot");
}else if(temp > 40){
  console.log("Very Hot");
}*/

// ----------------------------------------------------------

// If 10

/*let a = 23;
let s ;

if(a > 0 && a % 2 === 1){
  s = "musbat toq son"
} else if(a > 0 && a % 2 === 0){
  s = "musbat juft son"
} else if(a < 0 && a % 2 === 1){
  s = "manfiy toq son"
}else if(a < 0 && a % 2 === 0){
  s = "manfiy juft son"
}else{
  s = "son 0 ga teng"
}
console.log(s);*/

// -----------------------------------------------------

// If 11

/* let a = -7;
let s ;

if((a > 0 && a % 2 === 0) && (a >=10)){
  s = " Ikki xonali juft son"
} else if((a > 0 && a % 2 === 1) && (a >=100)){
  s = "Uch xonali toq son"
} else if(a < 0 && a % 2 === 1){
  s = "manfiy toq son"
}else if(a < 0 && a % 2 === 0){
  s = "manfiy juft son"
}else{
  s = "son 0 ga teng"
}
console.log(s); */
 
//2 usul ya'ni to'liq ishlaydigani✔

/*  let a = 7;

if (a > 0) {
  if (a % 2 === 0) {
    console.log("musbat juft son");
  } else {
    console.log("musbat toq son");
  }
} else if (a < 0) {
  if (Math.abs(a % 2) === 0) {
    console.log("manfiy juft son");
  } else {
    console.log("manfiy toq son");
  }
} else {
  console.log("son 0 ga teng");
} */

// -----------------------------------------------------

// If 12
/* let n = 7; //2
console.log(n*n);//49 */

// -----------------------------------------------------
// If 13
/* let price = 20;
let on_break = false;
if(price >=20 && on_break == true){
  console.log("daftar olish mumkin");
} else{
  console.log('daftar olish mumkin emas', ); 
} */

//2 usul
/* let price = 20;
let money = Number(prompt("pul miqdorini yozing"));
let on_break = true;

if (price < money && on_break) {
  console.log("daftar olish mumkin");
} else {
  console.log('daftar olish mumkin emas',);
} */

// -----------------------------------------------------
// If 14f
/* let n = 43;

let a = Math.floor(n/10);//2
let b = n % 10; //72
let s = b *10 + a;

if(s <= n){
  console.log("true");
} else{
  console.log("false"); 
} */

// -----------------------------------------------------

// If 15
/*let n = 84815;

if(n >= 10000){
  console.log(5);
} else if( n >= 1000){
  console.log(4);
} else if(n >= 100){
  console.log(3);
}else if(n >= 10){
  console.log(2);
} else{
  console.log(1);
} */

// -----------------------------------------------------

// If 16
 /*let n = 345;

let a = Math.floor(n/10);//4
let b = Math.round(n/10);
let s = a+b;
console.log(s);
*/
// -----------------------------------------------------
// If 17
/* let n = 45;

let a = Math.floor(n/10);//4
let b = Math.round(n/10);
let s = a+b;
function toqRaqamlarYegindisi(n) {
  let yigindi = 0; // Yig'indini saqlash uchun o'zgaruvchi

  // N sonini stringga aylantirib, har bir raqamni tekshiramiz
  let raqamlar = n.toString(); 

  for (let i = 0; i < raqamlar.length; i++) {
      let raqam = parseInt(raqamlar[i]); // Raqamni butun son sifatida olish

      // Agar raqam toq bo'lsa
      if (raqam % 2 !== 0) {
          yigindi += raqam; // Toq raqamni yig'indiga qo'shamiz
      }
  }

  return yigindi; // Yig'indini qaytaramiz
}

// Misollar
console.log(toqRaqamlarYegindisi(345)); */  // 5
//---------------------------------------------------------------------

// IF 18
/* let a = 12;
let b = 5;
let c = 7;

let d = Math.max(a,b,c);
console.log(d);// 18 
*/
//--------------------------------------------------------------------------
// IF 20
/* let n = 12345 ;

let number1 = Math.floor(n / 10000);
let number2 = Math.floor(n / 1000) % 10;
let number3 = Math.floor(n / 100) % 10;
let number4 = Math.floor(n / 10) % 10;
let number5 = n % 10;

let res = number1;
let index = 0;

if (number2 > res) {
  res = number2;
  index = 1;
}

if (number3 > res) {
  res = number3;
  index = 2;
}

if (number4 > res) {
  res = number4;
  index = 3;
}

if (number5 > res) {
  res = number5;
  index = 4;
}

console.log(`Eng katta raqam: ${res}, Uning indeksi: ${index}`); */
