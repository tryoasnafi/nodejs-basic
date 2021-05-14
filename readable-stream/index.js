const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "./article.txt"),
  {
    highWaterMark: 12,
  }
);

const writeableStream = fs.createWriteStream(
  path.resolve(__dirname, "./output.txt")
);

readableStream.on("readable", () => {
  try {
    let res = `| ${readableStream.read()} `;
    writeableStream.write(res);
  } catch (err) {
    console.log(err.message);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
