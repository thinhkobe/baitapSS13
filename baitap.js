// bai1
// const myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];

// let newmyColor = myColor.toString();
// console.log(newmyColor);

// // bai 2

// let chuoi = prompt("hay nhap chuoi so");
// let newString = "";

// for (let i = 0; i < chuoi.length; i++) {
//   newString += chuoi[i];
//   if (chuoi[i] % 2 == 0 && chuoi[i + 1] % 2 == 0) {
//     newString += "-";
//   }
// }

// console.log("chuoi moi: ", newString);

// // bai 3
// let text = prompt("nhap doan text");
// let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let LOWER = 'abcdefghijklmnopqrstuvwxyz';

// let newtext = [];

// for(let i = 0;i<text.length;i++){
//     if()
// }

// bai1 viết một hàm javaScript để tính tổng của 2 số

// const sum = (a, b) => {
//   return a + b;
// };

// bài 2 viết một hàm javascript nhận vào một mảng số nguyên và trả về tổng của các số đó

// let array = [1, 2, 3, 2, 5, 6, 7];

// const sumArray = (array) => {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// };
// console.log(sumArray(array));

// bài 3 viết một hàm javascript để kiểm tra xem một số có phải là số nguyên tố hay k

// let number = parseInt(prompt("nhập một số nguyên dương"));

// const checkNumber = (a) => {
//   let check = true;
//   if (a <= 1) {
//     console.log(number + "không phải số nguyên tố");
//     return;
//   }
//   for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i == 0) {
//       check = false;
//       break;
//     }
//   }
//   if (check) {
//     console.log(number + "là số nguyên tố");
//   } else {
//     console.log(number + "không phải số nguyên tố");
//   }
// };

// checkNumber(number);
// bài 4 viết một hàm javaScript để đảo ngược một chuỗi
// const array = "(6595aasa)";
// const reverse = (array) => {
//   let newArray = array.split("").reverse().join("");
//   return newArray;
// };

// console.log(reverse(array));
// bài 5 viết một một hàm javaScript nhận vào một mảng các số trả về chỉ chứa số chẵn

// const array = [121, 232, 434, 542, 21];
// const getEven = (array) => {
//   let even = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       even.push(array[i]);
//     }
//   }
//   return even;
// };

// console.log(getEven(array));

// bài 6 viết hàm nhận vào một chuỗi trả về lượng từ trong chuỗi

// let string = prompt("nhập vào một chuỗi ");

// const count = (str) => {
//   return str.length;
// };

// console.log(count(string));

// bai 7 viết một hàm js nhận vào một mảng các chuỗi và trả về một mảng mới chỉ chứa các kí tự viết hoa

// let string = prompt("nhập vào một chuỗi ");

// const uper = (str) => {
//   let up = [];
//   let regex = /\b[A-Z]+\b/;
//   for (let i = 0; i < str.length; i++) {
//     if (regex.test(str[i])) {
//       up.push(str[i]);
//     }
//   }
//   return up;
// };

// console.log(uper(string));

//  viết hàm js nhận vào một mảng mới sắp xếp theo thứ tự tăng dần

// let array = [32, 435, 343, 31, 35, 121];

// const reorganize = (array) => {
//   return array.sort((a, b) => a - b);
// };

// console.log(reorganize(array));

// viết một hàm nhận về số nguyên dương và trả về mảng các số nguyên tố nhỏ hơn số đó

// let N = parseInt(prompt("nhập số nguyên dương"));

// const find = (a) => {
//   if (a < 2) {
//     return;
//   }
//   prime = [];
//   for (let i = 2; i < a; i++) {
//     let check = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j == 0) {
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       prime.push(i);
//     }
//   }
//   return prime;
// };

// console.log(find(N));

// Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được

const calculation = (a) => {
  return a * a;
};

// Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được.

const calc = (a) => {
  return a * a * Math.PI;
};
