console.log("Video 33: Phạm vi biến (Scope)");

/* Có 3 phạm vi (Scope)
+ Toàn cục (Global)
+ Hàm (Function)
+ Khối (Block)*/

// Phạm vi toàn cục – Global Scope
let globalVar = "Tôi là biến toàn cục"; 

function show() { 
 console.log(globalVar); // Truy cập được 
}

show(); 
console.log(globalVar); // Truy cập được 

// Bị giới hạn bởi cặp đóng mở ngoặc nhọn với phạm vi 'Hàm' và 'Khối'

// Phạm vi hàm – Function Scope
function sayHi() { 
    let name1 = "hoidanit"; 
    console.log("Hi " + name1); 

    // Phạm vi khối – Block Scope (ES6 trở lên)
    if (true) { 
    let x = 10; 
    const y = 20; 
    console.log(x, y); // ✅ Truy cập được 
    } 
    console.log(x); // ❌ Lỗi: x is not defined
} 

sayHi(); 
console.log(name1); // ❌ Lỗi: name1 is not defined 


