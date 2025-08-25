console.log("Video 66: Async/ Await");


// callback


// promise 
fetch("http://localhost:8000/users")
    .then(res => res.json())
    // convert data dang response sang object
    .then(data => console.log("fetch with promise: ",data))


// async/ await
const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("fetch with async await: ", data);

}
fetchData();