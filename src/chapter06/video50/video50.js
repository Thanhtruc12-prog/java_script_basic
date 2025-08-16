console.log("Video 50: Xử lý sự kiện (Event)");
/* 
Sự kiện (event)
là hành dộng do người dùng hoặc trình duyệt tạo ra khi tương tác 
với trang web, ví dụ click, cuộn chuột,...
=> Khi sự kiện xảy ra JS có thể thực hiện một đoạn mã để phản hồi
lại sự kiện đó

*/


const element = document.getElementById("myBtn");

console.log(element);

function handleClickBtn() {
    console.log("you click a button");
}