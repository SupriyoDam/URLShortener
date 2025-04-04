const urlUtils = require('../utils/url')


exports.getShortUrl = (req, res, next)=>{
    const shortUrl = req.params.url
    console.log(shortUrl)
    // Decode the short URL to get the original URL
    urlUtils.decodeUrl(shortUrl)
    .then(url=>{
        console.log('Decoded URL:', url); // Log the long URL
        res.redirect(url); // Redirect to the long URL
    })
    .catch(err=>{
        console.log('Error:',err)
        res.render('error',{
            pagetitle: '404'
        })
    })
}