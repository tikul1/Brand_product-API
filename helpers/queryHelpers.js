//add element at any index

const { isArray } = require("lodash");
const { data, newUser } = require("./dataForQuery");

//using spread operator

const newData = [...newUser, ...data];
console.log(newData);

//push and concat

// newUser.push(...data);
// console.log(newUser);

// let arr1 = newUser;
// let arr2 = data;
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

function addElement() {
  let arr = data;
  let index = 1;
  let element = newUser;
  for (i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = element;
}
// addElement();
// console.log(data);

function firstAndLast() {
  let arr = data;
  let first = arr[0];
  let last = arr[arr.length - 1];
  console.log(first);
  console.log(last);
}
// firstAndLast();

function updateUserData(data, newUser) {
  if (data.indexOf(newUser) === -1) {
    console.log(data.indexOf(newUser));
    data.push(newUser);
    console.log("user updated");
    console.log(data);
  } else {
    console.log("user exists");
  }
}
// updateUserData(data, newUser);
// updateUserData(data, newUser);

module.exports = { updateUserData, firstAndLast, addElement };

// add data at index
// const addData = data.splice(5, 0, newUser);
// console.log(data);

//get first and last element from data
// let first = data.at(0);
// let last = data.at(-1);
// console.log(first, last);
//filtering data by name

// const filteredUser = data.filter((obj) => {
//   if (obj.name.first === "Carol") {
//     return obj;
//   }
// });
// const indexOfData = data.filter((obj) => {
//   if (obj.name.first === "Indie") {
//     return indexOf(obj);
//   }
// });
// console.log(indexOfData);
// console.log(filteredUser);
