const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write('Name: PL');

    // const moveUp = setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);

    // setTimeout(() => clearInterval(moveUp), 10000);
  });

  return conn;
};



module.exports = connect;