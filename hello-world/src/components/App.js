import React, { Component } from 'react';
import Header from './Header';
import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';
import Footer from './Footer';
import './App.css';

export class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-background">
                    <Header/>
                    <SearchPanel/>
                </div>
                <SearchResult/>
                <Footer/>
            </div>
        );
    }
}
export default App;
