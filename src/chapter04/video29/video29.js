console.log("Video 29: Break, Continue");


// 5 vs '5' number vs string 5 == '5' => true
// 5 vs '5' number vs string 5 === '5' => false

// for (let i = 1; i <  10; i++){
//     console.log("i = ",i);
//     if (i === 5){ 
//         break;
//     }


for (let i = 1; i <  10; i++){
    if (i === 5){ 
        continue;
    }
    console.log("i = ",i);

}