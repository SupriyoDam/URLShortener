const path = require('path');

exports.getIndex = (req, res, next)=>{
    // res.sendFile(path.join(process.cwd(), 'views', 'index.html'))
    res.render('index')
}


