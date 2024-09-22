const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8080 
const db = require("./src/config/db")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello World !")
})


app.listen(PORT,()=>{
    try {
        db()
        console.log(`Server is Running on PORT : ${PORT}`)
    } catch (error) {
        
    }
})