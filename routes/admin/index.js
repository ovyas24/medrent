const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.render("dashboard",{ layout:'admin' })
})

router.get("/products")

module.exports = router