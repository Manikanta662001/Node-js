const fs = require("fs");
//Suppose if we have a file with huge data if we want to read that file it will take time to read,so Streams come in to picture.
//Streams are nothing but loading a small chunks of data from that huge data continuosly.
//creating streams
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");
//reading and writing data using streams.
/* readStream.on("data", (chunk) => {
  console.log("--- NEW CHUNK ---");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
}); */

//same as above.
readStream.pipe(writeStream);
