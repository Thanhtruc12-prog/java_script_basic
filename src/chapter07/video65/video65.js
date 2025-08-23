console.log("Video 65: Callback và vấn đề CallBack Hell");

// Callback
const greeting = (name1, callback) => {
    console.log("Xin chào: ", name1);
    callback();
}

const hello = () => {
    console.log("Learn callback...");
}
const hi = () => {
    console.log("say hi....");
}

greeting("Tosker", hello);
greeting("bla bla", hi);


// Callback Hell: callback lồng nhau trong các hàm