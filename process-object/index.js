const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i < 1000000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

// $ NODE_ENV=development node index.js 'Tryo Asnafi'
