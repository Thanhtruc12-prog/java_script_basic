console.log("Video 51: Lắng nghe event với addEventListener");

const element = document.getElementById("tkBtn");

const handleClickBtn = () => {
    console.log("you click a button");
}
element.addEventListener("click", handleClickBtn);
console.log(element);