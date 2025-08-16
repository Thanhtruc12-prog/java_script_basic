console.log("Video 53: Thay doi CSS bằng JS");

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

const backBtnElement = document.getElementById("backBtn");

console.log(myBtnElement, myTextElement, backBtnElement);

myBtnElement.addEventListener("click", () => {
    // console.log("click me");
    myTextElement.style.color = "green";
    myTextElement.style.backgroundColor = "gray";
    myTextElement.classList.add("hoidanit", "eric");
    // {key: value}
})

backBtnElement.addEventListener("click", () => {
    // console.log("click me");
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "white";
    myTextElement.classList.remove("hoidanit", "eric");

    // {key: value}
})