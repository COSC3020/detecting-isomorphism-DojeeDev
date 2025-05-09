const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

g1 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
];
g2 = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
]

assert(are_isomorphic(g1, g2) == true);

g1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
g2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

assert(are_isomorphic(g1, g2) == false);


g1 = [
  [1, 1, 1],
  [1, 1, 1]
];
g2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

assert(are_isomorphic(g1, g2) == false);
