alert("Hello World");
console.log("Hello World");
let usrName = "ZLM";
console.log(usrName);
usrName = "Zayar Lin Maung";
console.log(usrName);
const pi = 3.14;
console.log(pi);
// pi = 3.15;
// console.log(object);
//DataTypes
//String
let str = "ZLM";
//number
let num = 1;
//boolean
let isTrue = true;
//null => nothing
let emptyContainer = null;
//undefined
let unknownVar;
console.log(unknownVar);
//operator
//+, -, *, /, %
// >, <, >=, <=, ==, ===, !==
// =, +=, -=, *=, /=, %=

// Array
let arr = [1,2,3,4,5,6]
let added  = arr.map((value,index)=>arr[index]+12)
console.log(added)

let even = arr.filter((value,index)=>{arr[index]%2===0})
console.log(even)
let arr2 = [12,4312,3421,1241,5234,123]

sorted = arr2.sort()
console.log(sorted);