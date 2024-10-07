const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //lodash package
  const num = _.random(0, 20);
  console.log(num);
  const greet = _.once(() => {
    console.log("greet");
  });

  greet();
  greet();

  //setting response headers
  /* res.setHeader("Content-Type", "text/plain");
  res.write("hello from backend");
  res.end(); */

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on pot 3000");
});

//  npm init -y
//  the above command is used to create a package.json file with default settings.
