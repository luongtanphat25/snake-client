const net = require('net');
const {IP, PORT, NAMES} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write(NAMES);

    // const moveUp = setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);

    // setTimeout(() => clearInterval(moveUp), 10000);
  });

  return conn;
};



module.exports = {connect};