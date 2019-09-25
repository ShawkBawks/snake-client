const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => { handleUserInput(data) });
  return stdin;
};
const handleUserInput = function (data) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
};

module.exports = {setupInput}