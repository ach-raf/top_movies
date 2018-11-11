import React, { Component } from 'react';
const tools = require('../functions/tools');

class Movies extends Component {
    constructor() {
      super();
      this.state = {
        movies: []
      };
    }
  
    componentDidMount() {
      fetch('/movies')
        .then(res => res.json())
        .then()
        .then(movies => this.setState({movies : movies.data.results}, () => console.log('Movies fetched...', movies)));
    }
    build_movies_list() {
      /*const myData = [].concat(this.state.movies)
      .sort(tools.dynamicSort('-vote_count'));*/
      const my_movies = [];
      var temp_movie = {};
      const myData = [].concat(this.state.movies);
      myData.map(movie =>{
        temp_movie = {'tmdb_id' : movie.id, 'title' : movie.title};
        my_movies.push(temp_movie);
      })
      console.log('my movies', my_movies);

    }
    
  
    render() {
      const myData = [].concat(this.state.movies);
      this.build_movies_list();
      return (
        <div>
            <h2>Movies</h2>
            <ul>
              {myData.map(movie => 
              <li key={movie.id}>{movie.title} {movie.vote_count}</li>
              )}
            </ul>
        </div>
      );
    }
  }
  
  export default Movies;