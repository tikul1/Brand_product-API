const express = require("express");
const { clone } = require("lodash");
const _ = require("lodash");

var users = [
  { user: "barney", age: 45, active: true },
  { user: "fred", age: 25, active: false },
  { user: "pebbles", age: 35, active: false },
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

// console.log(_.chunk(nums, 3));

// console.log(_.compact(nums, 3));

// console.log(_.concat(nums, 9, [10], [[11]]));

// console.log(_.difference([2, 1, 4, 5], [2, 3, 6, 7])); //result in respective of first array. so output will be [1]

// console.log(_.differenceBy([1.2, 2.1], [2.4, 3.2], Math.floor));

// console.log(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));

// console.log(_.drop([1, 2, 3], 1));

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
//     return p.user === "hardik";
//   })
// );

// console.log(_.findLastIndex(users, ["active", false]));

// console.log(_.fill([1, 2, 3], null));
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

// console.log(_.indexOf([1, 2, 1, 3], 3, 2)); //3 to find from index of 2
// console.log(_.initial([1, 2, 3, 4, 5])); //gets first all value without last element
// console.log(_.intersection([2, 1], [2, 3]));
// console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// console.log(_.intersectionWith(objects, otherObjects, _.isEqual));

// console.log(_.join(["a", "b", "c"], ""));
// console.log(_.last(["a", "b", "c"]));
// console.log(_.lastIndexOf([1, 2, 1, 2], 2));
// console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));  //find 2 from 2nd index right to left. 1=>2 so o/p=1
// console.log(_.nth(users, 1));
// console.log(_.pull(["a", "b", "c", "a", "b", "c"], "a"));
// console.log(_.pullAll(["a", "b", "c", "a", "b"], ["a"]));
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
// console.log(_.sortedIndex([3, 6, 8, 9, 10], 2));
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
// console.log(_.take([1, 2, 3], 3)); //create new array with 2 first elements.
// console.log(_.takeRight([1, 2, 3], 2)); //from right to left

// console.log(
//   _.takeRightWhile(users, (o) => {
//     return !o.active;
//   })
// );
// console.log(_.takeRightWhile(users, "barney"));

// console.log(_.union([2], [1, , 4, 5, 2, 3, 2, 1, 3, 2, 1, 3, 2]));
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
// console.log(_.zip(["a", "b"], [1, 2], [true, false]));
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
// console.log(_.xor([5, 1], [5, 5])); //creates the array of unique values\
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

// console.log(_.countBy([6.1, 4.2, 6.7], Math.ceil));
// console.log(_.countBy(["one", "two", "three"], "length"));
// console.log(_.every(users, { active: false }));

// console.log(
//   _.filter(users, (o) => {
//     return o.active == false;
//   })
// );

// console.log(
//   _.find(users, (o) => {
//     return o.age < 40;
//   })
// );

// console.log(
//   _.findLast([1, 2, 3, 4], function (n) {
//     return n % 2 == 1;
//   })
// );

// function duplicate(n) {
//   return [n, n];
// }

// console.log(_.flatMap([1, 2], duplicate));

// function duplicate(n) {
//   return [[[n, n]]];
// }
// console.log(_.flatMapDeep([1, 2], duplicate));
// console.log(_.flatMapDepth([1, 2], duplicate, 2));

// _.forEach([1, 2, 3], (value) => {
//   console.log(value);
// });
// _.forEach({ a: 1, b: 2 }, (value, key) => {
//   console.log(value);
// });

// _.forEachRight([1, 2], (value) => {
//   console.log(value);
// });

// console.log(_.groupBy([6.1, 6.7, 3.2], Math.floor));

// console.log(_.includes([1, 2, 3], 1));     //checks wether value is in array or not

// console.log(
//   _.invokeMap(
//     [
//       [5, 1, 7],
//       [3, 2, 1],
//     ],
//     "sort"
//   )
// );

// console.log(_.invokeMap([137, 568], String.prototype.split, ""));

// var array2 = [
//   { dir: "left", code: 97 },
//   { dir: "right", code: 100 },
// ];
// console.log(
//   _.keyBy(array2, (o) => {
//     return String.fromCharCode(o.code);
//   })
// );
// console.log(_.keyBy(array2, "dir"));

// function square(n) {
//   return n * n;
// }
// console.log(_.map([4, 5], square));

// var users = [
//   { user: "fred", age: 48 },
//   { user: "barney", age: 34 },
//   { user: "fred", age: 40 },
//   { user: "barney", age: 36 },
// ];
// console.log(_.orderBy(users, ["user", "age"], ["asc", "desc"]));

// var users = [
//   { user: "barney", age: 36, active: false },
//   { user: "fred", age: 40, active: true },
//   { user: "pebbles", age: 1, active: false },
// ];
// console.log(_.partition(users, "active"));

// console.log(
//   _.reduce(
//     [1, 2],
//     function (a, b) {
//       return a + b;
//     },
//     0
//   )
// );

// console.log(_.reject(users, "active"));
// console.log(_.sample([1, 2, 3, 4]));
// console.log(_.sampleSize([1, 2, 3, 4], 2));
// console.log(_.shuffle([1, 2, 3, 4]));
// console.log(_.size([1, 2, 3, 4]));

// console.log(_.map(["4", "5"], _.ary(parseInt, 1)));

// var abc = function (a, b, c) {
//   return [a, b, c];
// };

// var curried = _.curry(abc);
// var curried2 = _.curryRight(abc);

// var x = curried(1)(2)(3);
// var y = curried2(1, 2)(3);
// console.log(y);

// _.defer(function (text) {
//   console.log(text);
// }, "deferred");

// _.delay(
//   function (text) {
//     console.log(text);
//   },
//   1000,
//   "later"
// );

// var flipped = _.flip(function () {
//   return _.toArray(arguments);
// });

// let x = flipped("a", "b", "c", "d", "e");
// console.log(x);

// var object = { a: 1, b: 2 };
// var other = { c: 3, d: 4 };

// var values = _.memoize(_.values);
// x = values(object);
// console.log(x);
// y = values(other);
// console.log(y);

// values.cache.set(object, ["a", "b"]);
// z = values(object);
// console.log(z);

// function doubled(n) {
//   return n * 2;
// }

// function square(n) {
//   return n * n;
// }

// var z = _.overArgs(
//   (x, y) => {
//     return [x, y];
//   },
//   [square, doubled]
// );

// console.log(z(9, 3));

// var rearged = _.rearg(
//   function (a, b, c) {
//     return [a, b, c];
//   },
//   [2, 0, 1]
// );

// console.log(rearged("b", "c", "a"));

// console.log(_.map(["6", "8", "10"], _.unary(parseInt))); //onllly one arguments in function

// _.defer(function (stamp) {
//   console.log(_.now() - stamp);
// }, _.now());

// console.log(_.castArray({ a: 1 }));

// var objects = [{ a: 1 }, { b: 2 }];
// var cloneObj = _.clone(objects);
// console.log(cloneObj);
// console.log(cloneObj[0] === objects[0]);

// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);

// console.log(
//   _.isArguments(
//     (function () {
//       return arguments;
//     })()
//   )
// );

// console.log(_.isArray([1, 2, 3]));
// console.log(_.isBoolean(false));
// console.log(_.isBuffer(new Buffer.alloc(2)));
// console.log(_.isDate(new Date()));
// console.log(_.isDate("april 23 2012"));

// console.log(_.isElement(document.body));
// console.log(_.isEmpty(null));

// var object = { a: 1 };
// var other = { a: 1 };

// console.log(_.isEqual(object, other));
// console.log(_.isError(new Error()));
// console.log(_.isFinite(3));
// console.log(_.isFunction(_));
// console.log(_.isInteger(3));
// console.log(_.isLength(3));
// console.log(_.isMap(new Map()));

// var object = { a: 1, b: 2 };

// console.log(_.isMatch(object, { b: 2 }));

// console.log(_.isNil(void 0));
// console.log(_.isNil(null));
// console.log(_.isNull(void 0));
// console.log(_.isNull(null));

// console.(_.isObject({}));
// console.lo.(_.isRegExp(/abc/));
// console.lo.(_.isSymbol(Symbol.iterator));
// console.lo.(_.isString("abc"));
// console.lo.(_.isUndefined(void 0));

// console.log(_.toArray({ a: 1, b: 2 }));
// console.log(_.toArray("abc"));
// console.log(_.toLength(Infinity));
// console.log(_.toLength("3.2"));
// console.log(_.toString(null));
// console.log(_.toString(""));
// console.log(_.toString("-0"));

//objectsss

// console.log(_.assign({ a: 1, c: 3 }, { a: 0, c: 4, d: 6 }));

// function x() {
//   this.a = 1;
// }

// function y() {
//   this.c = 3;
// }

// x.prototype.b = 10;
// y.prototype.d = 40;

// console.log(_.assignIn({ a: 4 }, new x(), new y()));

//=============> query

// function customizer(objectVal, sourceVal) {
//   return _.isUndefined(objectVal) ? sourceVal : objectVal;
// }

// let obj = _.assignInWith({ a: 1 }, { b: 3 }, customizer);

// console.log(obj);

// var object = { a: [{ b: { c: 3 } }, 4] };

// console.log(_.at(object, ["a[0].b.c", "a[1]"]));

// function abc() {
//   return true;
// }

// console.log(
//   _.create(abc.prototype, {
//     hardik: "parmar",
//   })
// );

// a = _.defaults(
//   { a: 3 },
//   { b: 1 }
//   // { a: 6 },
//   // { a: 7 },
//   // { a: 8 },
//   // { c: 1 },
//   // { b: 10 },
//   // { d: 12 }
// );
// console.log(a);

// console.log(_.defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }));

// function abc() {
//   this.a = 1;
//   this.b = 2;
// }

// abc.prototype.c = 3;

// console.log(_.toPairs(new abc()));

// function abc() {
//   this.a = 1;
//   this.b = 2;
// }

// abc.prototype.c = 3;

// console.log(_.toPairsIn(new abc()));

// console.log(
//   _.transform(
//     [2, 3, 4],
//      (result, n) => {
//       result.push((n *= n));
//       return n % 2 == 0;
//     },
//     []
//   )
// );

// var object = { a: [{ b: { c: 7 } }] };
// // _.unset(object, "a[0].b.c");
// // console.log(object);
// console.log(
//   JSON.stringify(
//     _.update(object, "a[0].b.c", (num) => {
//       return num * num;
//     })
//   )
// );

// var object = {};

// console.log(_.updateWith(object, "[0][1]", _.constant("a"), Object));

// console.log(_.values("hi"));

// function abc() {
//   this.a = 1;
//   this.b = 2;
// }

// abc.prototype.c = 3;

// console.log(_.valuesIn(new abc()));

// var users2 = {
//   barney: { age: 36, active: true },
//   fred: { age: 40, active: false },
//   pebbles: { age: 1, active: true },
// };

// console.log(
//   _.findKey(users2, function (o) {
//     return o.age < 40;
//   })
// );

// function abc() {
//   this.a = _.constant("a");
//   this.b = _.constant("b");
// }

// abc.prototype.c = _.constant("c");

// console.log(_.functions(new abc()));

// function abc() {
//   this.a = _.constant("a");
//   this.b = _.constant("b");
// }

// abc.prototype.c = _.constant("c");

// console.log(_.functionsIn(new abc()));

// var object = { a: [{ b: { c: 3 } }] };

// console.log(_.get(object, "a[0].b.c"));
// console.log(_.has(object, "a"));

// var object = { a: 1, b: 2, c: 1 };

// console.log(_.invert(object));

// var object = { a: 1, b: 2, c: 1 };

// console.log(_.invertBy(object));

// var object = { a: [{ b: { c: [1, 2, 3, 4] } }] };

// console.log(_.invoke(object, "a[0].b.c.slice", 1, 3));

// console.log(
//   JSON.stringify(
//     _.mapKeys({ a: 1, b: 2 }, function (value, key) {
//       return key;
//     })
//   )
// );

// var users = {
//   fred: { user: "fred", age: 40 },
//   pebbles: { user: "pebbles", age: 1 },
// };

// console.log(
//   _.mapValues(users, function (o) {
//     return o.age;
//   })
// );
// console.log(
//   _.mapValues(users, function (o) {
//     return o.user;
//   })
// );

// var object = {
//   a: [{ b: 2 }, { d: 4 }],
// };

// var other = {
//   a: [{ c: 3 }, { e: 5 }],
// };
// console.log(_.merge(object, other));

// var object = { a: 1, b: "2", c: 3 };

// console.log(_.omit(object, ["a", "c"]));
// console.log(_.omitBy(object, _.isNumber));

// var object = { a: 1, b: "2", c: 3 };

// console.log(_.pick(object, ["a", "c"]));

// var object = { a: [{ b: { c: 3 } }] };

// _.set(object, "a[0].b.c", 4);
// console.log(object.a[0].b.c);

// var users = [
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "pebbles", age: 1 },
// ];

// var youngest = _.chain(users)
//   .sortBy("age")
//   .map(function (o) {
//     return o.user + " is " + o.age;
//   })
//   .head()
//   .value();
// console.log(youngest);

// var users = [
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
// ];
// console.log(_(users).head());

// console.log(_.camelCase("Hardik Parmar"));
// console.log(_.capitalize("Hardik"));
// console.log(_.deburr("déjà vu"));
// console.log(_.endsWith("abc", "c"));
// console.log(_.endsWith("abc", "b", 2));
// console.log(_.kebabCase("Hardik Parmar"));
// console.log(_.lowerCase("Ab_CcD"));

// console.log(_.pad("abc", 8));
// console.log(_.pad("abc", 8, "_--"));
// console.log(_.padEnd("abc", 8));
// console.log(_.padStart("abc", 8));
// console.log(_.repeat("Hardik", 3));
// console.log(_.snakeCase("hardik parmar"));
// console.log(_.startCase("hardik parmar"));
// console.log(_.trim("  abc  "));
// console.log(_.trim("  abc  _--- def   "));

// var func = _.cond([
//   [_.matches({ a: 1 }), _.constant("matches A")],
//   [_.conforms({ b: _.isNumber }), _.constant("matches B")],
//   [_.stubTrue, _.constant("no match")],
// ]);

// console.log(func({ a: 1, b: 2 }));

// console.log(func({ a: 0, b: 1 }));

// console.log(func({ a: "1", b: "2" }));

// var objects = _.times(2, _.constant({ a: 1 }));
// console.log(objects);
// console.log(_.defaultTo(undefined, 10));

// var object = { a: 1 };

// console.log(_.identity(object) === object);

// var objects = [
//   { a: 1, b: 2, c: 3 },
//   { a: 4, b: 5, c: 6 },
// ];

// console.log(_.filter(objects, _.matches({ a: 4, c: 6 })));

// console.log(_.find(objects, _.matchesProperty("a", 4)));

// var func = _.nthArg(3);
// console.log(func("a", "b", "c", "d"));

// console.log(_.range(1, 5));
// console.log(_.range(4));
// console.log(_.range(-4));

// console.log(_.times(2, _.stubArray));
// console.log(_.times(2, _.stubObject));
// console.log(_.times(2, _.stubString));
// console.log(_.times(2, _.stubTrue));
// console.log(_.times(5, String));
// console.log(_.times(5, _.constant(0)));
// console.log(_.toPath("a.b.c"));
// console.log(_.uniqueId("contact_"));

module.exports = { _ };
