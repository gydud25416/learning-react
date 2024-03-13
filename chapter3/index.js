// import * as circle from "./circle.js";
// console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

// import circle from "./circle.js"

// console.log(circle.PI, circle.getArea(1), circle.getCircumference(1))

import lodash from "lodash";
const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr);

console.log(uniqueArr);