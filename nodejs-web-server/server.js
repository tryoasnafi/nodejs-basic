const http = require("http");

const host = "localhost";
const port = 5000;

const requestListener = (request, response) => {
  const { method } = request;

  response.writeHeader(200, "Content-Type", "text/html");

  if (method === "GET") {
    response.end("<h1>Hello!</h1>");
  }

  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }

  if (method === "PUT") {
    response.end("<h1>Bonjour!</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Salam!</h1>");
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
