console.log("Video 51: Lắng nghe event với addEventListener");

const element = document.getElementById("tkBtn");

const handleClickBtn = () => {
    console.log("you click a button");
}
// khong truyen dau dong mo ngoac cho function
element.addEventListener("click", handleClickBtn);
console.log(element);