 console.log("Bài tập Lab 02");

/*  1.Tạo hàm tinhTrungBinh(toan, van, anh) 
 - Hàm nhận vào 3 điểm số (sử dụng tham số). 
 - Trả về điểm trung bình (sử dụng return). */

 function tinhTrungBinh(toan, van, anh){
    return (toan + van + anh)/3;
 }


/*2.Tạo hàm xepLoai(diemTB) 
Dựa vào điểm trung bình, xếp loại học sinh: 
Từ 9 → "Xuất sắc" 
Từ 8 và nhỏ hơn 9 → "Giỏi" 
Từ 6.5 và nhỏ hơn 8→ "Khá" 
Còn lại → "Trung bình" 
Dùng if / else if / else để thực hiện*/

const xepLoai = (diemTB) =>{
    if(diemTB >= 9 && diemTB <= 10){
        return 'Xuất sắc';
    }
    else if(diemTB >= 8 && diemTB < 9){
        return 'Giỏi';
    }
    else if(diemTB >= 6.5 && diemTB <8){
        return 'Khá';
    }
    else {
        return 'Trung Bình';
    }
}

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
Điểm trung bình: ${tinhTrungBinh(diemToan, diemVan, diemAnh)}
Xếp loại: ${xepLoai(diemTB)}`);


