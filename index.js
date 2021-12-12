// const http = require("http");

// const PORT = 8081;

// const requestHandler = (request, response) => {
//   if (request.url.indexOf("/home") >= 0) {
//     response.writeHead(200, { "Content-type": "text/json" });
//     return response.end('{"url": "homepage"}');
//   }
//   response.writeHead(200, { "Content-type": "text/json" });
//   return response.end('{"url": "other"}');
//   // response.writeHead(200, { "Content-type": "text/json" });
//   // response.end(JSON.stringify({ a: 1, b: [] }));
//   // response.writeHead(200, { "Content-type": "text/html" });
//   // response.end("<h1>GOIT</h1>");
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a server launch: ", err);
//   }
//   console.log(`Server works at port ${PORT}`);
// });

const express = require("express");
const app = express();

const PORT = 8081;

app.get("/home", (reg, res) => {
  res.send("get request");
});
app.post("/home", (reg, res) => {
  res.send("post request");
});
app.delete("/home", (reg, res) => {
  res.send("delete request");
});
app.use((reg, res) => {
  res.send("middleware request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a server launch: ", err);
  }
  console.log(`Server works at port ${PORT}`);
});
