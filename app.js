const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')

const Url = require('./models/url')

const adminRoutes = require('./routes/admin')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(process.cwd(),'public')))

// setting view engine for express
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/',adminRoutes)

app.use('/',(req, res, next) => {
    res.render('error',{
        pagetitle: '404'
    })
})

app.listen(3000, ()=>{
    console.log('URL Shotener App started at http://localhost:3000/')
})