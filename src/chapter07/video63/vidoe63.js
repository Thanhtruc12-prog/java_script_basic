console.log("Video 63: Gọi API với Fetch");

// fetch => raw data (Response) =>  object

// const response = fetch("http://localhost:8000/users");

// console.log(response);

/*
url: Địa chỉ API 
response.json( ) : Chuyển dữ liệu từ JSON sang Object 
.then( ): Xử lý kết quả 
.catch( ): Bắt lỗi nếu có vấn đề 
*/

const temp = fetch("http://localhost:8000/users");

temp
.then(data => data.json())
.then(d => console.log(d));

