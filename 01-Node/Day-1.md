# 01-Node – Node.js File System & HTTP Basics

This folder contains my Day 1 learning in Node.js. It covers:

## 📦 Topics Covered

- File creation (`fs.writeFile`)
- File appending (`fs.appendFile`)
- File renaming (`fs.rename`)
- File copying (`fs.copyFile`)
- File deletion (`fs.unlink`)
- Folder creation & deletion (`fs.mkdir`, `fs.rm`)
- Reading file and folder contents (`fs.readFile`, `fs.readdir`)
- Creating a simple HTTP server using the `http` module

## 🔁 Modules Used

- `fs` – Node.js File System module
- `http` – To create a simple server

## 🧠 Notes

- Files are read in Buffer form by default. Use `utf8` for human-readable output.
- `fs/promises` allows using `async/await` instead of callbacks.
