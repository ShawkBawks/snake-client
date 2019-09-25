const { connect } = require('./client');

console.log('Connecting ...');
connect();
const handleUserInput = function (data) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => { handleUserInput(data) });
  return stdin;
};
setupInput();
handleUserInput();
// const handleUserInput = function(data) {
//   if (key === '\u0003') {
//     process.exit();
//   }
// }

// on any input from stdin (standard input), output a "." to stdout

