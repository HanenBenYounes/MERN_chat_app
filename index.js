const express = require ('express')
require('dotenv').config()
const app =express()
const mongoose = require ('mongoose')

const port=3000

app.get('/', (req, res)=>{
    res.send("hello chat app")
})
mongoose.connect('mongodb+srv://hanen:hanenhanen@cluster0.kccketg.mongodb.net/',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console , "connection error:"));
db.once ("open", function(){
    console.log("database connected successfully....")
})


app.listen(process.env.PORT , ()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})