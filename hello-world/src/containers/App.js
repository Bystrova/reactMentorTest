import React, { Component } from 'react';
import Header from '../components/Header';
import SearchPanel from '../components/SearchPanel';
import SearchResult from '../components/SearchResult';
import Footer from '../components/Footer';
import './App.css';

export class App extends Component {
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
