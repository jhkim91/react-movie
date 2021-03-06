import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount() / component 가 존재할경우
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  componentWillMount(){
    console.log("1.will mount");
  }

  componentDidMount(){
    console.log("3.did mount");
    this._getMovies();
    /*setTimeout(() => {
      this.setState({
        movies: [
          /!* ...this.state.movies *!/
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
          },
          {
            title: "존윅3",
            poster: "https://movie-phinf.pstatic.net/20190626_170/1561524289335uILG7_JPEG/movie_image.jpg?type=m665_443_2"
          }
        ]
      })
    }, 2000)*/
  }

  state = {}

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
          <Movie
              title={movie.title_english}
              poster={movie.medium_cover_image}
              key={movie.id}
              genres={movie.genres}
              synopsis={movie.synopsis}
          />
      );
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
  }

  render() {
    console.log("2.render");
    const { movies } = this.state;
    return (
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading'}
        </div>
    );
  }
}

export default App;
