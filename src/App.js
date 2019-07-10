import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "모어 댄 블루",
    poster: "https://movie-phinf.pstatic.net/20181128_141/1543382638212PApzR_JPEG/movie_image.jpg?type=m665_443_2"
  },
  {
    title: "토이스토리4",
    poster: "https://movie-phinf.pstatic.net/20190611_117/1560221190708y3bbv_JPEG/movie_image.jpg?type=m665_443_2"
  },
  {
    title: "알라딘",
    poster: "https://movie-phinf.pstatic.net/20190524_195/1558663257252zJSKg_JPEG/movie_image.jpg?type=m665_443_2"
  },
  {
    title: "스파이더맨: 파 프롬 홈",
    poster: "https://movie-phinf.pstatic.net/20190603_165/1559539749502u3EEh_JPEG/movie_image.jpg?type=m665_443_2"
  }
]

class App extends Component {
  render() {
    return (
        <div className="App">
          {movies.map(movie => {
            return (
                <Movie title={movie.title} poster={movie.poster} />
            );
          })}
        </div>
    );
  }
}

export default App;
