const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require('cors')
require('dotenv').config()
const contactRoute = require('./route')

//Middlewares
app.use(cors({
    origin: ["https://portfolio-arjuns-projects-7d50791f.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
}))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/contact',contactRoute)


// PORT
app.listen(7070,(err)=>{
    if(err) throw err
    console.log("server start running on local-host 7070")
})