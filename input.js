const {IP, PORT, NAME, MOVE_UP_KEY, MOVE_DOWN_KEY,
  MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require(`./constants`);

let connection;


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => { handleUserInput(data) });
  return stdin;
};
const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } if (key === 'w') {
      connection.write(MOVE_UP_KEY);
    } if (key === 'a') {
      connection.write(MOVE_LEFT_KEY);
    } if (key === 's') {
      connection.write(MOVE_DOWN_KEY);
    } if (key === 'd') {
      connection.write(MOVE_RIGHT_KEY);
    } if (key === 'q') {
      connection.write("Say: MOOOOOOOOOOOOOVE OUT THE WAY");
    } if (key === 'e') {
      connection.write("Say: Ah suh");
    }
  })
};

module.exports = { setupInput }