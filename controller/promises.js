// const express = require("express");

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    return resolve("success");
  } else {
    return reject("wrong");
  }
});
p.then((message) => {
  console.log("then : " + message);
}).catch((message) => {
  console.log("catch" + message);
});

function watchPromise() {
  let userLeft = false;
  let userWatching = false;

  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatching) {
      reject({
        name: "User Watching ",
        message: " Welcome ",
      });
    } else {
      resolve("Hello Good morning");
    }
  });
}
watchPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//promise.all

const one = new Promise((resolve, reject) => {
  resolve("1");
});

const two = new Promise((resolve, reject) => {
  resolve("2");
});

const three = new Promise((resolve, reject) => {
  resolve("3");
});

Promise.all([one, two, three]).then((messages) => {
  console.log(messages);
});
