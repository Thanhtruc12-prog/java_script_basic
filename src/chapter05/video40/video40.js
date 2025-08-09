console.log("Video 40: Biến đổi mảng với map()");


const scores =[10, 9, 8, 3, 7, 10];

// read data
// scores.forEach((element, index ) => {
//     console.log( "index = ", index," value = ", element);
// })


// modify data
// map() không làm thay đổi arr ban đầu
const scores_x2 = scores.map((element, index) => {
    return element * 2;
})

// ngắn gọn hơn, nhưng khuyến khích làm cách code 1
const other_scores_x2 = scores.map((element, index) => element * 2)


console.log("score = ", scores);

console.log("scores_x2 = ", scores_x2);

console.log("other_scores_x2 = ", other_scores_x2);

