import React, { Component } from 'react';
import './SearchResult.css';
import ResultSorting from '../ResultSorting/ResultSorting';
import MovieList from '../MovieList/MovieList';

export default class SearchResult extends Component {
    render() {
        return (
            <div className="search-result">
                <ResultSorting/>
                <MovieList/>
            </div>
        );
    }
}
