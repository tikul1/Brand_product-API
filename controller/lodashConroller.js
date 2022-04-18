const express = require("express");
const _ = require("lodash");

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 0];
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var otherObjects = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

// console.log(_.chunk(nums, 4));

// console.log(_.compact(nums, 3));

// console.log(_.concat(nums, 9, [10], [[11]]));

// console.log(_.difference([2, 1], [2, 3])); //result in respective of first array. so output will be [1]

// console.log(_.differenceBy([1.2, 2.1], [2.4, 3.2], Math.floor));

// console.log(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));

// console.log(_.drop([1, 2, 3], 2));

// console.log(_.dropRight([1, 2, 3], 2));

// console.log(                                    //droprightwhile
//   JSON.stringify(
//     _.dropRightWhile(users, (o) => {
//       return !o.active;
//     })
//   )
// );

// console.log(
//   JSON.stringify(_.dropRightWhile(users, { user: "pebbles", active: false }))
// );

// console.log(
//   _.findIndex(users, (p) => {
//     return p.user == "pebbles";
//   })
// );

// console.log(_.findLastIndex(users, ["active", false]));

// console.log(_.fill([1, 2, 3], "a"));
// console.log(_.fill([1, 2, 3, 4], "a", 1, 3));

// console.log(_.flatten([1, [2, [3, [4]], 5]]));
// console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

// var array = [1, [2, [3, [4]], 5]];

// console.log(_.flattenDepth(array, 1));

// console.log(
//   _.fromPairs([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

// console.log(
//   _.head([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

// console.log(_.indexOf([1, 2, 1, 3], 3, 2));          //3 to find from index of 2
// console.log(_.initial([1, 2, 3]));           //gets first all value without last element
// console.log(_.intersection([2, 1], [2, 3]));
// console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// console.log(_.intersectionWith(objects, otherObjects, _.isEqual));

// console.log(_.join(["a", "b", "c"], "~"));
// console.log(_.last(["a", "b", "c"]));
// console.log(_.lastIndexOf([1, 2, 1, 2], 2));
// console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));  //find 2 from 2nd index right to left. 1=>2 so o/p=1
// console.log(_.nth(users, 1));
// console.log(_.pull(["a", "b", "c", "a", "b", "c"], "a", "c"));
// console.log(_.pullAll(["a", "b", "c", "a", "b", "c"], ["a", "c"]));
// console.log(
//   _.pullAllBy(
//     [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }],
//     [{ x: 1 }, { x: 3 }],
//     "x"
//   )
// );

// console.log(
//   _.pullAllWith(
//     [
//       { x: 1, y: 2 },
//       { x: 3, y: 4 },
//       { x: 5, y: 6 },
//     ],
//     [{ x: 3, y: 4 }],
//     _.isEqual
//   )
// );

// console.log(_.pullAt(["a", "b", "c", "d"], [1, 3]));

// var array1 = [1, 2, 3, 4];
// var even = _.remove(array1, (n) => {
//   return n % 2 == 0;
// });
// console.log(array1);
// console.log(even);

// console.log(_.reverse([1, 2, 3, 4]));
// console.log(_.sortedIndex([3, 6, 8, 9, 10], 7));
// console.log(
//   _.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => {
//     return o.x;
//   })
// );

// console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5)); //5 to find in a array
// console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));  //it shows the highest index at which value should be added

// console.log(
//   _.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => {
//     return o.x;
//   })
// );                                           //same as sortlastindex highest index

// console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5)); //highest index so after last 5 and before 6
// console.log(_.uniq([1, 2, 3, 3, 3])); //creates duplicate free new array
// console.log(_.sortedUniq([1, 2, 3, 3, 3]));
// console.log(_.sortedUniqBy([1.1, 2.2, 3.3, 3.3, 3.3], Math.floor));
// console.log(_.tail([1, 2, 3])); //ignores 1st element
// console.log(_.take([1, 2, 3], 2)); //create new array with 2 first elements.
// console.log(_.takeRight([1, 2, 3], 2)); //from right to left

// console.log(
//   _.takeRightWhile(users, (o) => {
//     return !o.active;
//   })
// );
// console.log(_.takeRightWhile(users, "barney"));

// console.log(_.union([2], [1, 2, 3, 2, 1, 3, 2, 1, 3, 2]));
// console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];
// var others = [
//   { x: 1, y: 1 },
//   { x: 1, y: 2 },
// ];
// console.log(_.unionWith(objects, others, _.isEqual));

// console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
//   { x: 1, y: 2 },
// ];
// console.log(_.uniqWith(objects, _.isEqual));
//  console.log(_.zip(["a", "b"], [1, 2], [true, false]));
// console.log(_.zipObject(["a", "b"], [1, 2]));
// console.log(JSON.stringify(_.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2])));
// console.log(
//   _.zipWith([2, 4], [10, 20], [100, 500], [1000, 3000], (a, b, c, d) => {
//     return a + b + c + d;
//   })
// );

// let zipped = _.zip(["a", "b"], [1, 2], [true, false]);
// console.log(zipped);
// console.log(_.unzip(zipped));

// var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// console.log(zipped);
// console.log(_.unzipWith(zipped));

// console.log(_.without([2, 1, 2, 3], 1, 2)); //1 & 2 will be ignored
// console.log(_.xor([5, 1], [5, 5]));   //creates the array of unique values\
// console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// var objects = [
//   { x: 1, y: 2 },
//   { x: 2, y: 1 },
// ];
// var others = [
//   { x: 1, y: 1 },
//   { x: 1, y: 2 },
// ];
// console.log(_.xorWith(objects, others, _.isEqual));

// console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
// console.log(_.countBy(["one", "two", "three"], "length"));
console.log();

module.exports = { _ };
