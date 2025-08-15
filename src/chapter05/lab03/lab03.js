console.log("Bài tập: Lab 03");
console.log("============================");


const sp1 = { 
 name1: "T-shirt", 
 price: 200, 
 inStock: true 
} 

const sp2 = { 
 name1: "Skirt ", 
 price: 300, 
 inStock: true 
} 

const sp3 = { 
 name1: "Jacket", 
 price: 500, 
 inStock: true 
} 

const sp4 = { 
 name1: "Jeans", 
 price: 350, 
 inStock: false 
} 

const sp5 = { 
 name1: "Cap", 
 price: 100, 
 inStock: false 
} 

const products = [sp1, sp2, sp3, sp4, sp5];
console.log("original:", products);
console.log("1.============================");

// Hãy thực hiện: 
// 1. In ra tên của sản phẩm đầu tiên. 
const first_pr = products[0]
console.log("Tên sản phẩm 1: ", first_pr.name1);
// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
console.log("2.============================");
const products2 = [sp1, {
    name1: sp2.name1,
    price: 150, 
    inStock: sp2.inStock
}, sp3, sp4, sp5]
console.log("update the price of product 2: ", products2);
// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm 
/* Thêm phần tử: 
 + vào cuối mảng với push() 
 + vào đầu mảng với unshift() 
 */
console.log("3.============================");
products.push({
    name1: "Hat",
    price: 110,
    inStock: false
})
console.log("add last product: ",products);
// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm 
/* Xóa phần tử: 
 + cuối mảng với pop() 
 + đầu mảng với shift() */
console.log("4.============================");
products.pop();
console.log("remove last product: ", products);
// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm. 
console.log("5.============================");
products.forEach((value, index) => { 
    console.log("name of product: ", value.name1);
})
// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm. 
console.log("6.============================");
const price_of_products = products.map((value, index) =>{
    return value.price;
})
console.log("Giá sản phẩm: ", price_of_products);
// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true). 
console.log("7.============================");
const inStock_products = products.filter((value, index) =>{
    return value.inStock === true;
})
console.log("Các sản phẩm còn hàng: ", inStock_products);
// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên. 
console.log("8.============================");
for (const key in sp1){
    console.log(key, sp1[key]);
}
