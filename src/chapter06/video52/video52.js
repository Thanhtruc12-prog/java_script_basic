console.log("Video 52: Thay đổi nội dung của HTML");

const myBtnElement = document.getElementById("myBtn");

const backBtnElement = document.getElementById("backBtn");


const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () =>{
    // myTextElement.innerText = "Just change the content with thanhtruc";
    myTextElement.innerHTML = 
    "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>"; 
} )

backBtnElement.addEventListener("click", () =>{
    myTextElement.innerText = "Video 52: Thay đổi nội dung của HTML";
} )
