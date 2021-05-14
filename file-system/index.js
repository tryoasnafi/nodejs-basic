const fs = require("fs");
const path = require("path");

// const fileReadCallback = (err, data) => {
//   if (err) {
//     console.log("Gagal membaca file " + err);
//     return;
//   }

//   console.log(data);
// };

// fs.readFile("notes.txt", "UTF-8", fileReadCallback);

try {
  const data = fs.readFileSync(path.resolve(__dirname, "notes.txt"), "UTF-8");
  console.log(data);
} catch (e) {
  console.log(e.message);
}
