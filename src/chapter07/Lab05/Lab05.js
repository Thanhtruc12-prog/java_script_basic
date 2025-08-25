console.log("Bài tập Lab 05");

//  fetch 

const fetchUsers = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("fetch with async await: ", data);

    // insert data to html'c
    const tbody = document.querySelector("#users tbody");
    if(data && data.length ){
        data.forEach((user, index) => {
            tbody.innerHTML += // dấu cộng để nối chuỗi
            // nếu không có dấu cộng phần data đầu sẽ bị phần 2 chèn lên
             `  <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>`;
        });
    }
    

    
}

fetchUsers();
