console.log("Video 54: Alert (extra)");

const element = document.getElementById("login");

console.log(element);

element.addEventListener("click", () => {
    console.log("click me");
    alert("login không hợp lệ...")
})