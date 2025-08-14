console.log("Video 43: Các thao tác với Object");

const person ={
    name1: "Thanh Truc",
    age: 20,
}

console.log("person before: ", person);

// get data
console.log("age: ", person.age);
console.log("name: ", person["name1"]);

// set data
person.address = "An Giang";
person["language"] = "VietNamese";

// delete
delete person.address;
console.log("person after: ", person);


