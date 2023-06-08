const {KEYS} = require('./constants');
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  for (const keyValue in KEYS) {
    if (keyValue === key) {
      connection.write(KEYS[key]);
      console.log(KEYS[key]);
    }
  }
};

module.exports = {setupInput};