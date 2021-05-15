const http = require("http");

const host = "localhost";
const port = 5000;

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.end("<h1>Ini adalah homepage!</h1>");
    } else {
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("<h1>Hallo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Hallo ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else {
    response.end("<h1>Halaman tidak ditemukan</h1>");
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
