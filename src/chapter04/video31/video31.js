console.log("Video 31. Arrow function");

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10, 5));

// vốn dĩ ban đầu là function vô danh nên cần được đặt tên mới trả ra 
const sum = (a, b) => {
    return a + b;
}

console.log(sum(10, 5));

// (function () {
//   console.log('Chay ngay di')
// })();