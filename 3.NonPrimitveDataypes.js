// 3) let obj1 = { "greeting": "hello" };
// let obj2 = obj1;
// obj1["greeting"] = "Bye";
// console.log(obj1);
// console.log(obj2);

// js had two data types 
// primitive and non primitive data types
// array, object are non primitive data types
// they are hold reference 
let obj1 = { greeting: "hello" };   //in more memory it create a new object and added a reference of it to obj1
// in obj2, insist of creating a new object we just pass the reference of it
let obj2 = obj1;
// so whenever we updatin a reference object it reflect on both
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

// we can over come with this by doing the deep copy