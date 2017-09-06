import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="movie-list">
                {/*<div className="movie-not-found">No films found</div>*/}
                <MovieItem/>
            </div>
        );
    }
}