const http = require("http");
const port = 4000;

//create a server object:
const server = http.createServer(function (req, res) {
  const { url } = req;
  const [path, query] = url.split("?");
  if (path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ url, path, query })); //write a response to the client
    res.end(); //end the response
  }
  if (path === "/hello") {
    res.write("Hello!"); //write a response to the client
    res.end(); //end the response
  }
});

server.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});
