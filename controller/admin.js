const path = require('path');

exports.getIndex = (req, res, next)=>{
    res.render('index',{
        pagetitle: 'Home'
    })
}

exports.getShort = (req, res, next)=>{
    res.render('index',{
        pagetitle: 'Home'
    })
}

exports.postShort = (req, res, next)=>{
    res.render('index',{
        pagetitle: 'Home'
    })
}


