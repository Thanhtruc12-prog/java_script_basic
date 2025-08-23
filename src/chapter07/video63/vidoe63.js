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
.then(res => res.json())// res.json là 1 promise nên cần , then để lấy data
.then(data => console.log(data));

