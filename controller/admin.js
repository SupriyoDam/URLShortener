const path = require('path');
const urlUtils = require('../utils/url')
const Url = require('../models/url')

exports.getIndex = (req, res, next)=>{
    res.render('index',{
        pagetitle: 'Home'
    })
}
exports.getShort = (req, res, next)=>{
    res.render('records',{
        pagetitle: 'Url List'
    })
}

exports.postShort = (req, res, next)=>{
    const fullUrl = req.body.longurl
    const description = req.body.description
    // console.log('long url:', fullUrl,'\ndescription:',description)
    const shortUrl = urlUtils.urlGenerate(); // will generate short urlStrings
    // console.log('generated short url part:', shortUrl)
    const url = new Url({longurl: fullUrl, shorturl: shortUrl, description: description})
    url.save()
    res.redirect('/records')
}

exports.getUrls = (req, res, next)=>{
    Url.find()
        .then((urls)=>{
            // consolse.log(urls)
            res.render('records',{
                pagetitle: 'Url List',
                urls: urls
            })
        })
}

// delete url
exports.postDeleteUrl = (req, res, next)=>{
    const id = req.body.id;
    console.log('id:',id)
    Url.findByIdAndDelete(id)
        .then(()=>{
            console.log('Deleted')
            res.redirect('/records')
        })
        .catch((err)=>{
            console.log(err)
        })
}

// exports.getIndex = getIndex
// exports.getShort = getShort
// exports.postShort = postShort
// exports.getUrls = getUrls
// exports.postDeleteUrl = postDeleteUrl