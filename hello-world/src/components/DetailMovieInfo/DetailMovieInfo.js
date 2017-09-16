import React, { Component } from 'react';
import './DetailMovieInfo.css';

export default class  DetailMovieInfo extends Component {
    render() {
        const { fileName, movieName,  genre, year, duration, summary, director, cast} = this.props;
        return (
            <div className="search-panel">
                <div className="found-movie">
                    <div className="found-movie-poster">
                        <img src={fileName} alt=""/>
                    </div>
                    <div className="found-movie-description">
                        <div className="selected-movie-name">{movieName}</div>
                        <div className="selected-movie-genre">{genre}</div>
                        <div className="selected-movie-year-length">
                            <div>{year}</div>
                            <div>{duration}</div>
                        </div>
                        <div className="selected-movie-summary">{summary}</div>
                        <div className="additional-info">{director}</div>
                        <div className="additional-info">{cast}</div>
                    </div>
                </div>
            </div>
        );
    }
}