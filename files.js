const fs = require("fs");

// reading files
//reading a file is asynchronus operation, once the file is read then only that Callback function is called.
// but it will not stop the flow of execution of whole file.
// if the file does not exist in that path it will give error.

/* fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data, data.toString());
});

console.log("after File Read"); */

// writing files
//if the file in that path exists it will override the text in that file with this new text.
/* fs.writeFile("./docs/blog1.txt", "Hello World", () => {
  console.log("Text was written in file");
}); */

//if the file in that path doesn't exists it will create a new file and write the text in that file.
/* fs.writeFile("./docs/blog2.txt", "This another blog", () => {
  console.log("Text was written by creating a new file");
}); */

// creating directories
//mkdir method is used if that folder doesn't exist it will create a new folder, if it already exists then it will give us error.
//existsSync method return true if that folder exists otherwise returns false.
//rmdir method is used to delete a folder.

/* if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
} */

// deleting files
//unlink method is used to delete a file.
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", () => {
    console.log("File is deleted");
  });
}
