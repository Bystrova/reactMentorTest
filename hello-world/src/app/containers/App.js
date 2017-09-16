import React, { Component } from 'react';
import Header from '../components/Header/Header';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import SearchResult from '../components/SearchResult/SearchResult';
import Footer from '../components/Footer/Footer';
import './App.css';

export default class App extends Component {
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
