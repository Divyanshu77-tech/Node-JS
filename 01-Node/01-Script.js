const { error } = require("node:console");
const fs = require("node:fs");

// ==============================
// 📁 FILE OPERATIONS Module
// ==============================

// ✅ Create a file
// fs.writeFile("first.txt", "My First file", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Working");
//   }
// });

// ✅ Append to a file
// fs.appendFile("first.txt", " Ye mai nai add kiya hai", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Appended Successfully");
//   }
// });

// ✅ Rename a file
// fs.rename("first.txt", "New-File.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Renamed File");
//   }
// });

// ✅ Copy a file
// fs.copyFile("New-File.txt", "./copied/copied.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Created file");
//   }
// });

// ✅ Delete a file
// fs.unlink("New-File.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted");
//   }
// });

// ✅ Read a file
// fs.readFile("./myFolder/01-file.txt", "utf8", (err, data) => {
//   if (err) console.log("Reading file Error", err.message);
//   else console.log("File Data", data);
// });

// ==============================
// 📂 FOLDER OPERATIONS
// ==============================

// ✅ Create a folder
// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder Created");
//   }
// });

// ✅ Read contents of a folder
// fs.readdir("myFolder", (err, files) => {
//   if (err) {
//     console.log("Error while folder", err.message);
//   } else {
//     console.log("Files in folder", files);
//   }
// });

// ✅ Delete a folder
// Note: don't use { recursive: true } for empty folders
// fs.rm("./copied", { recursive: true }, function (err) {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Folder Deleted");
//   }
// });


const HTTP = require("http");
// ==============================
// 📁 HTTP Module
// ==============================

// htts - is a protocol 

// 1 Create a server 
const server = HTTP.createServer((req,res) => {
  res.end("Hello world");
});

server.listen(3000); 