

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Please Run, Now it automatically update")
// });

// server.listen(3000);


// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)
// console.log("Process", process);

const fs = require("fs");
const fileName = "target.txt";

fs.readFileSync(fileName, (err,data) => {
    if(err) console.log(err);
    
    console.log(data.toString());
});

console.log("Node is async programming");