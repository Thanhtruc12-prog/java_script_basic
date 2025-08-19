console.log("Video 62: Promise lời hứa từ tương lai");


// console.log("1");

// // async
// setTimeout(() => {
//     console.log("2")
// }, 5000)

// console.log("3")

// const myPromise = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2 with promise");
//             // return
//             resolve("hoidanit");
//             }, 2000)
//     })
// }

// const test = myPromise();
// console.log("test", test);
// console.log("============================== with promise below");

// console.log("1");
// myPromise().then(data => {
//     console.log("data: ", data);
//     console.log("3");
// })


console.log("1. Bắt đầu");
// tạo 1 Promise để giả lập 1 tác vụ mất thời gian (vd: tải dữ liệu từ server)
const myPromise = new Promise((resolve, reject) => {
    console.log("2. Tác vụ trong Promise bắt đầu (chạy ngay lập tức)");

// setTimeout  là một hàm bất đồng bộ, nó sẽ không "dừng" chương trình ở đây
    setTimeout(() => {
        resolve("4. Tác vụ hoàn thành!");
        // dòng này sẽ được thực thi sau cùng
    }, 2000)// chờ 2s => A
});

// .then() đăng ký một hành động sẽ làm khi PROMISE hoàn thành
myPromise.then((message) => {
    console.log(message);
});

console.log("3. Kết thúc kịch bản chính"); //B




