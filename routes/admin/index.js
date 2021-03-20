const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.send("http-response")
})

module.exports = router