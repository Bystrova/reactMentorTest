import React, { Component } from 'react';
import './MovieItem.css';
import killbill from '../images/kill-bill.jpg';
import killbill1 from '../images/kill-bill1.jpg';
import pulpfiction from '../images/pulp-fiction.jpg';
import jackiebrown from '../images/jackie-brown.jpg';
import resorvoirdogs from '../images/resorvoir-dogs.jpg';
import fourrooms from '../images/four-rooms.jpg';
import stolen from '../images/stolen.jpg';
import range from '../images/range.jpg';
import trespass from '../images/trespass.jpg';
import moonstruck from '../images/moonstruck.jpg';

export default class MovieItem extends React.Component {
    render() {
        return (
            <div className="movie-item">
                <div className="img-wrapper">
                    <img src={killbill}/>
                    <div className="img-label">
                        <div className="movie-name">kill bill: vol 2</div>
                        <div className="movie-year">2004</div>
                        <div className="movie-genre">Action & Adventure</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={killbill1}/>
                    <div className="img-label">
                        <div className="movie-name">kill bill: vol 1</div>
                        <div className="movie-year">2003</div>
                        <div className="movie-genre">Action & Adventure</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={pulpfiction}/>
                    <div className="img-label">
                        <div className="movie-name">pupol fiction</div>
                        <div className="movie-year">1993</div>
                        <div className="movie-genre">Oscar-winning movies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={jackiebrown}/>
                    <div className="img-label">
                        <div className="movie-name">jackie brown</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={resorvoirdogs}/>
                    <div className="img-label">
                        <div className="movie-name">reservoir dogs</div>
                        <div className="movie-year">1992</div>
                        <div className="movie-genre">Independent Movies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={fourrooms}/>
                    <div className="img-label">
                        <div className="movie-name">four rooms</div>
                        <div className="movie-year">1995</div>
                        <div className="movie-genre">Comedies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={stolen}/>
                    <div className="img-label">
                        <div className="movie-name">stolen</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={range}/>
                    <div className="img-label">
                        <div className="movie-name">range</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={trespass}/>
                    <div className="img-label">
                        <div className="movie-name">trespass</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={moonstruck}/>
                    <div className="img-label">
                        <div className="movie-name">moonstruck</div>
                        <div className="movie-year">1987</div>
                        <div className="movie-genre">Fantastic</div>
                    </div>
                </div>
            </div>
        );
    }
}