console.log("Video 28: For loop/ While loop/ Do...While Loop")


for(let i = 0; i < 5; i++){
    console.log("i = ",i);
}

// while
let score = 10;

while (score > 50) {
    console.log(">>> Check score = ",score);
    score--;
}

// do-while
// chạy tối thiểu 1 lần dù đúng hay sai 
let score1 = 10;

do {
    console.log(">>> Check score = ",score1);
    score1--;
} while (score1 > 50);