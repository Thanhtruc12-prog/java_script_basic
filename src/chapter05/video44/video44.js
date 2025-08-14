console.log("Video 44: Lặp Object với for...in và for...of");


const sv1 ={
    username: "Thanh Truc",
    score: 9.6
}

const sv2 ={
    username: "Tosker",
    score: 3
}

const sv3 ={
    username: "bla bla",
    score: 6
}


const sinhvien = [sv1, sv2, sv3];

console.log(">>>> check sinhvien:", sinhvien);

// sinhvien.forEach((item, index) => {
//     console.log(">>> index = ",index, "name = ", item.username);

// })
const person = {
    email: "hoidanit@gmail.com", 
    age: 25,
    address: "vietnam"
}

// For in và For of

// for in: in thông tin người dùng dưới dạng table (bảng biểu)
// for (let key in person) {
//     console.log(key, person[key]);
// }

// for of
//  for (let value of Object.values(person)) {
//     console.log(value);
//  }

 for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
 }