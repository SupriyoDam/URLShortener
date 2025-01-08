const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin')

const app = express()

app.use(express.static(path.join(process.cwd(),'public')))

// setting view engine for express
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/',adminRoutes)

app.listen(3000, ()=>{
    console.log('URL Shotener App started at http://localhost:3000/')
})

