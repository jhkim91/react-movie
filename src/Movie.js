import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render() {
        return (
            <img src="https://scontent.ficn6-1.fna.fbcdn.net/v/t1.0-9/47579532_581134639006795_3584058279031996416_o.jpg?_nc_cat=107&_nc_oc=AQlNRt6QIYS52V7lWl8_Uz_Gtbl8mVtCn8YpgR-wDh5s9Lbtl9q5fvByW_w-prNA3NA&_nc_ht=scontent.ficn6-1.fna&oh=e2a6a41ac75c97bdfce8f3a15529e795&oe=5DC62D08" />
        );
    }
}

export default Movie;