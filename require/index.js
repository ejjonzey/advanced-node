// console.log(module);

// Extra paths:
// $HOME/.node_modules
// $HOME/.node_libraries
// $PREFIX/lib/node

// just resolve dont load
// require.resolve('find-me');

// resolve find-me.js on same level as index
// const findMe = require('./find-me');

// resolve find-me on parent level
// const findMe = require('../find-me');

// resolve find-me on root level
// const findMe = require('/find-me');

// const findMeExports = require('/lib/find-me');

// circular module
const m1 = require('./lib/m1');
console.log(m1)