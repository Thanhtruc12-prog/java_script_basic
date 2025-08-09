console.log("Video 38: Thêm, sửa, xóa phần tử Array");

const names = ["Thanh Truc", "Tosker", "bla bla", "nữ"];

// index = 0 ; arr[index]

console.log("0 = ", names[0]);

console.log("2 = ", names[2]);

console.log("3 = ", names[3]);

// chỉnh sửa phần tử bên trong mảng
names[2] = "update name";

console.log("before: ",names);


/* Thêm phần tử: 
 + vào cuối mảng với push() 
 + vào đầu mảng với unshift() 
Xóa phần tử: 
 + cuối mảng với pop() 
 + đầu mảng với shift() */

names.push(true, 20);
names.unshift(null);

names.pop();
names.shift();
console.log("after: ",names);


