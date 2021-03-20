const express = require('express')
const ejs = require("ejs")
const path = require("path")
const app = express()
const port = process.env.PORT||3000

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/user/index"))
app.use("/admin", require("./routes/admin/index"))

app.listen(port,(req,res)=> console.log(`App running at port ${port}`))