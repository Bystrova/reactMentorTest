import React, { Component } from 'react';
import './MovieItem.css';


export default class MovieItem extends Component {
    render() {
        const { fileName, movieName, year, genre } = this.props;
        return (
                <div className="img-wrapper">
                    <img src={fileName} alt="" />
                    <div className="img-label">
                        <div className="movie-name">{movieName}</div>
                        <div className="movie-year">{year}</div>
                        <div className="movie-genre">{genre}</div>
                    </div>
                </div>
        );
    }
}