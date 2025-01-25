const Url = require('../models/url');

const URL_LENGTH = 7 // generated short url length


// will generate short url string 
exports.urlGenerate = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let uniqueId = '';
    for (let i = 0; i < URL_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueId += characters[randomIndex];
    }
    return uniqueId;
}

exports.urlRepeatCheck = (newUrl) =>{
    
}