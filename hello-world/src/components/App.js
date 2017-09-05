import React, { Component } from 'react';
import Header from './Header';
import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';
import './App.css';

export class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-background">
                    <Header/>
                    <SearchPanel/>
                </div>
                {/* <div className="movie-not-found">No films found</div>*/}
                <SearchResult/>
                <Footer/>
            </div>
        );
    }
}


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="netfix-footer">netfixroulette</div>
            </div>
        );
    }
}

export default App;
