import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';
import killbill from '../../images/kill-bill.jpg';
import killbill1 from '../../images/kill-bill1.jpg';
import pulpfiction from '../../images/pulp-fiction.jpg';
import jackiebrown from '../../images/jackie-brown.jpg';
import resorvoirdogs from '../../images/resorvoir-dogs.jpg';
import fourrooms from '../../images/four-rooms.jpg';
import stolen from '../../images/stolen.jpg';
import range from '../../images/range.jpg';
import trespass from '../../images/trespass.jpg';
import moonstruck from '../../images/moonstruck.jpg';

export default class MovieList extends Component {
    render() {
        return (
            <div className="movie-list">
                {/*<div className="movie-not-found">No films found</div>*/}
                <MovieItem fileName={killbill} movieName="Kill Bill" year={2004} genre="Action & Adventure"/>
                <MovieItem fileName={killbill1} movieName="kill bill: vol 1" year={2003} genre="Action & Adventure"/>
                <MovieItem fileName={pulpfiction} movieName="pupol fiction" year={1993} genre="Oscar-winning movies"/>
                <MovieItem fileName={jackiebrown} movieName="jackie brown" year={1997} genre="Dramas"/>
                <MovieItem fileName={resorvoirdogs} movieName="reservoir dogs" year={1992} genre="Independent Movies"/>
                <MovieItem fileName={fourrooms} movieName="four rooms" year={1995} genre="Comedies"/>
                <MovieItem fileName={stolen} movieName="stolen" year={1997} genre="Dramas"/>
                <MovieItem fileName={range} movieName="range" year={1997} genre="Dramas"/>
                <MovieItem fileName={trespass} movieName="trespass" year={1997} genre="Dramas"/>
                <MovieItem fileName={moonstruck} movieName="moonstruck" year={2004} genre="Fantastic"/>
            </div>
        );
    }
}