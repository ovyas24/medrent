const express = require('express')
const app = express()
const port = process.env.PORT||3000

app.get('/',(req,res)=>{
   res.send('Hello')
})

app.listen(port,(req,res)=> console.log(`App running at port ${port}`))