let spinner = '|/-\\|/-\\|'
let index = 0;
for (const symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, 200 * index);
  index++;
};




