import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';


function Movie({title, poster, genres, synopsis}){
    console.log('title: '+title+' >>> poster : '+poster);
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {/*npm install --save react-lines-ellipsis*/}
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    //yarn add prop-types 사용, proptype을 사용해서 부모컴포넌트에서 받아오는값, 타입을 지정할수있다 혹은 받아와도 사용안할경우 오류남.
    //isRequired: 컴포넌트값에 prop을 제공하는걸 필수로 지정
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: PropTypes.array.isRequired
}

export default Movie;