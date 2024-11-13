var express = require('express');
var router = express.Router();
require('dotenv').config();

let token = process.env.API_KEY
router.get('/movie', (req,res) => {

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
    }})
    .then(response=>response.json())
    .then(data => {
        res.json({movies: data})

    })
    
})

module.exports = router;
