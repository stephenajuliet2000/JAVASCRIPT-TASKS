let obj1 = {name:"person 1" , age:5};
let obj2 = {age:5 , name:"person 1"};

// 1. convert js object to JSON string and sort the JSON by keys

let string = JSON.stringify(obj1, Object.keys(obj1).sort());
let string1 = JSON.stringify(obj2, Object.keys(obj2).sort());

//2. print the console

if (string === string1) {
    console.log("The JSON Objects are same");
} else {
    console.log("The JSON Objects are not same");
}

//console.log(string);
//console.log(string1);