const tools = require('../functions/tools');
const request = require('request');


module.exports = {
    movies_get_all: function (req, res) {
        url = 'https://api.themoviedb.org/3/discover/movie?api_key=e77787174a59fbaa85f91901e5aebdf9&language=en-US&sort_by=popularity.desc&include_adult=false&page=1';
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                return res.json({
                    data:body
                })
            }
        })
    },
    movies_get_movie: function (req, res) {
        const id = req.params.movie_id;
        url = tools.format('https://www.omdbapi.com/?i={0}&apikey=53698b8c&plot=full', id);
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                return res.json({
                    data:body
                })
            }
        })
    }
}

