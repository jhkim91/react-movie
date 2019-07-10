import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    //yarn add prop-types 사용, proptype을 사용해서 부모컴포넌트에서 받아오는값, 타입을 지정할수있다 혹은 받아와도 사용안할경우 오류남.
    //isRequired: 컴포넌트값에 prop을 제공하는걸 필수로 지정
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        );
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster} />
        );
    }
}

export default Movie;