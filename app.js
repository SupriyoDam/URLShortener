const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const Url = require('./models/url')
const MONGO_URI = "mongodb+srv://supriyo_user:DdVq4CtdUFzPNxc7@cluster0.l2o03.mongodb.net/urlshortener"

const adminRoutes = require('./routes/admin')
const utilRoutes = require('./routes/util')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(process.cwd(),'public')))

// setting view engine for express
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/',adminRoutes, utilRoutes)

app.use('/',(req, res, next) => {
    res.render('error',{
        pagetitle: '404'
    })
})


mongoose.connect(MONGO_URI)
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('URL Shotener App started at http://localhost:3000/')
    })

})