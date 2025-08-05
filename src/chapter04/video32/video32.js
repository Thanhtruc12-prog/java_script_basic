console.log("Video 32: key word 'return'");

// const sum1 = (a, b, c) => {
//     console.log(" run before ");
//     return a + b + c;
//     console.log(" run after ");
// }

// console.log(sum1(1, 2, 3));

//  dùng key word 'return' để thoát khỏi function.
const sum1 = (a, b, c) => {
    console.log(" run before ");
    if (typeof a !== 'number'){
        console.log(" run empty return ");
        return ;
    }
    console.log(" run after ");

    return a + b + c;
}

console.log(sum1('m', 2, 3));