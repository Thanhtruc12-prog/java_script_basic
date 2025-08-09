console.log("Lọc phần tử mảng với filter()");

const ages = [10, 20, 30, 25, 12, 19];

const ages_x2 = ages.map((item, index) =>{
    return item * 2;
})
console.log("original: ",ages);

console.log("ages x2: ",ages_x2);
console.log("============================");
console.log("FILTER()");
const agesGreaterThan18 = ages.filter((item, index) =>{
    return item > 18; //lấy true, loại false
})
// Cách ngắn gọn nhưng không khuyến khích
// const agesGreaterThan18 = ages.filter((item, index) => item > 18)

console.log("Ages Greater Than 18: ",agesGreaterThan18);
