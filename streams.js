const fs = require("fs");
const zlib = require("zlib");
//Suppose if we have a file with huge data if we want to read that file it will take time to read,so Streams come in to picture.
//Streams are nothing but loading a small chunks of data from that huge data continuosly.
//creating streams
const readableStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
// readableStream.on("data", (chunk) => {
//   console.log("--- NEW CHUNK STARTED ---");
//   console.log(chunk);
//   console.log("--- NEW CHUNK ENDED ---");
// });
// readableStream.on("end", (chunk) => {
//   console.log("--- FINISHED READING ---");
// });
// readableStream.on("error", (error) => {
//   console.log("--- Error Reading file ---", error.message);
// });
const writableStream = fs.createWriteStream("./docs/blog5.txt");
//reading and writing data using streams.
/* readStream.on("data", (chunk) => {
  console.log("--- NEW CHUNK ---");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
}); */

// const gzip = zlib.createGzip();
// readableStream.pipe(gzip).pipe(writableStream);
//same as above.
readableStream.pipe(writableStream);
writableStream.on("finish", () => {
  console.log("Finished copying the file.");
});
