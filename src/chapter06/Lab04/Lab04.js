console.log("Bài tập: Lab 04");

const usernameElement = document.getElementById("username");

const passwordElement = document.getElementById("password")

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
    const userName = usernameElement.value;
    const passWord = passwordElement.value;
    if(userName === "hoidanit@gmail.com" && passWord ==="123456"){
        alert("Đăng nhập thành công!");
        window.location.href = "success.html"
    }
    else {
        alert("Tài khoản hoặc mật khẩu sai");
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";

    }
    console.log(usernameElement.value, passwordElement.value)
    
})

