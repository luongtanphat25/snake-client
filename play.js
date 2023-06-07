const connect = require('./client');

console.log("Connecting...");
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', hadnleUserInput);
  return stdin;
};

const hadnleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();