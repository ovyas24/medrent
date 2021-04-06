const express = require('express')
const Repo = require('../../controllers/dashboard')
const router = express.Router()

router.get('/',(req,res)=>{
   res.render("dashboard",{ layout:'admin' })
})

router.get("/products", async (req,res) => {
   const categorised = req.query.cat == "yes" ? true : false
   const products = categorised ?  await Repo.CategorisedProduct() : await Repo.AllProducts()
   res.send(products)
})

router.post("/category", async (req,res) => {
   const isCategory = await Repo.AddCategory(req.body)
   res.send(isCategory)
})

router.post("/products", async (req,res) => {
   const isProductAdded = await Repo.AddProduct(req.body)
   res.send(isProductAdded)
})

router.post("/addUser", async (req,res) => {
   console.log(req.body);
   const newUser = await Repo.AddUser(req.body)
   res.send(newUser)
})

module.exports = router