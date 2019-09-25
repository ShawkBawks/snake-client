const net = require('net');
const {IP, PORT, NAME} = require(`./constants`);

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!')
    conn.write(NAME);
    // conn.write("Move: up");
    // conn.write("Move: left");
    // conn.write("Move: down");
    // conn.write("Move: right");
  });



  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.setEncoding('utf8');

  return conn;
}

module.exports = { connect };