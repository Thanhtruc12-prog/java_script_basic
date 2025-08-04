console.log("Video 26: Câu điều kiện if/ else/ else if");


// if/ else/ if else 

if (10 > 5){
    console.log("true");
}

const myAge = 20;

// tuổi lao động 
// if (myAge >= 18){ //true
//     console.log("Enjoy your work")
// }
// if (myAge < 18){ //true
//     console.log("You can not work at our company")
// }



if (myAge >= 18){ //true
    console.log("Enjoy your work")
}
else{ 
    console.log("You can not work at our company");
}

// score => A, B, C, D, F. Giỏi, Khá, Trung bình

const score = 9;
// if (score > 9){
//     console.log("Giỏi");
// }

// if (score > 6 && score < 9){
//     console.log("Khá");
// }

// if (score <6 ){
//     console.log("Trung bình");
// }

if (score >= 9){
    console.log("Giỏi");
}
else if (score >= 6 && score < 9){
    console.log("Khá");
}
else {
    console.log("Trung bình");
}