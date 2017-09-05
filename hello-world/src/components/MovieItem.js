import React, { Component } from 'react';
import './MovieItem.css;

export default class MovieItem extends React.Component {
    render() {
        return (
            <div className="movie-item">
                <div className="img-wrapper">
                    <img src="images/kill-bill.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">kill bill: vol 2</div>
                        <div className="movie-year">2004</div>
                        <div className="movie-genre">Action & Adventure</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/kill-bill1.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">kill bill: vol 1</div>
                        <div className="movie-year">2003</div>
                        <div className="movie-genre">Action & Adventure</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/pulp-fiction.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">pupol fiction</div>
                        <div className="movie-year">1993</div>
                        <div className="movie-genre">Oscar-winning movies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/jackie-brown.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">jackie brown</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/resorvoir-dogs.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">reservoir dogs</div>
                        <div className="movie-year">1992</div>
                        <div className="movie-genre">Independent Movies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/four-rooms.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">four rooms</div>
                        <div className="movie-year">1995</div>
                        <div className="movie-genre">Comedies</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/stolen.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">stolen</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/range.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">range</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/trespass.jpg"/>
                    <div className="img-label">
                        <div className="movie-name">trespass</div>
                        <div className="movie-year">1997</div>
                        <div className="movie-genre">Dramas</div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src="images/moonstruck.jpg"/>
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