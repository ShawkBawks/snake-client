const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
connect();

setupInput();
// handleUserInput();
// const handleUserInput = function(data) {
//   if (key === '\u0003') {
//     process.exit();
//   }
// }

// on any input from stdin (standard input), output a "." to stdout

