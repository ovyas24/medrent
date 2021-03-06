if(process.env.NODE_ENV!=='production'){
    require("dotenv").config()
}
const express = require('express')
const path = require("path")
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const morgan = require('morgan')
const port = process.env.PORT||3000
const hbs = require('express-handlebars')
const flash = require('express-flash')
const session = require("express-session")
const cors = require("cors")
const handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

require('./passport/passport-config')(passport);

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(morgan('tiny'))

app.use(cors())
app.use(flash())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


app.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: 'layout',
    handlebars: allowInsecurePrototypeAccess(handlebars),
    helpers: require("./helpers/hadleBarsHelper")
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use("/",require("./routes/user/index"))
app.use("/admin", require("./routes/admin/index"))

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    console.log("Connected Database");
    if(!err) app.listen(port, (req, res) => console.log(`App running at port ${port}`))
    else throw err
})