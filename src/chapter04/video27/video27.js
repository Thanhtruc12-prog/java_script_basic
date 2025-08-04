console.log("Video 27: switch/ case");

// score: Giỏi, Khá, Trung bình, Yếu

const score = 10;
switch (true) {
    case (score >= 8 && score <= 10): 
    // trong ngoặc thành toán tử true === 8  sai nên không ra
    // trong ngoặc thành toán tử true === true  đúng nên ra

        console.log("Giỏi");
        break;
    case (score >= 6 && score < 8):
        console.log("Khá");
        break;
    case (score >= 5 && score < 6):
        console.log("Trung bình");
        break;
    default:
        console.log("Yếu");
}