var express = require('express')
var app = express();


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})





app.listen(5000, (error)=>{
    if(error)
    console.log(error)
    else
    console.log("Server is Running on port: 5000");
})