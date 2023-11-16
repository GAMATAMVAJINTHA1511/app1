console.log("hi")

const express = require('express')
const app = express();

app.get('/',(req,res)=>{
   console.log( req.method)
    res.send("hello world")
})

app.listen(4000,()=>{
    console.log("server is running")
})