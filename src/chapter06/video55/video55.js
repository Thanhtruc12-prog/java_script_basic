console.log("Video 55: Local Storage (Extra)");
// convert object => json (stringify/ parse)
// 

const btn = document.getElementById("submitBtn");

const input = document.getElementById("myName");

const prevElement =document.getElementById("prev");

const prevName = localStorage.getItem("hoidanit");

if(prevName){
    prevElement.innerHTML =`<b>${prevName}</b>`
}

btn.addEventListener("click", () => {
    // console.log(input.value);
    localStorage.setItem("hoidanit", input.value);
    document.getElementById("message").innerHTML =`<b>${input.value}</b>`
    // document.getElementById("message").innerText = input.value;
})