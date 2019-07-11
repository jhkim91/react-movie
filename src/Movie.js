import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    console.log('title: '+title+' >>> poster : '+poster);
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="movie poster"/>
    )
}

Movie.propTypes = {
    //yarn add prop-types 사용, proptype을 사용해서 부모컴포넌트에서 받아오는값, 타입을 지정할수있다 혹은 받아와도 사용안할경우 오류남.
    //isRequired: 컴포넌트값에 prop을 제공하는걸 필수로 지정
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;