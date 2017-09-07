import React, {Component} from 'react';
 import {render} from 'react-dom';
class MovieDetail extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-background">
                    <Header />
                    <DetailMovieInfo />

                </div>
                <SearchResult />
                <Footer />
            </div>
        );
    }
}
class Header extends React.Component{
    render() {
        return (
            <div className="header">
                netfixroulette
            </div>
        );
    }
}

class DetailMovieInfo extends React.Component {
    render() {
        return (
            <div className="search-panel">
                <div className="found-movie">
                    <div className="found-movie-poster">
                        <img src="images/pulp-fiction.jpg" />
                    </div>
                    <div className="found-movie-description">
                        <div className="selected-movie-name">Pulp Fiction</div>
                        <div className="selected-movie-genre">Oscar-winning movies</div>
                        <div className="selected-movie-year-length">
                            <div>1994</div>
                            <div>154 min</div>
                        </div>
                        <div className="selected-movie-summary">Weaving together three stories featuring a burger-loving hit man,
                            his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation
                            of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit</div>
                        <div className="additional-info">Director: Quentin Tarantino</div>
                        <div className="additional-info">Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros</div>
                    </div>
                </div>
            </div>
        );
    }
}

class SearchResult extends React.Component {
    render() {
        return (
            <div className="search-result">
                <ResultSorting />
                <MovieList />
            </div>
        );
    }
}
class ResultSorting extends React.Component {
    render() {
        return (
            <div className="result-sorting">
                <div className="search producer-name">
                    Film by Quentin Tarantino
                </div>
            </div>
        );
    }
}
class MovieList extends React.Component {
    render() {
        return (
            <div className="movie-list">
                <MovieItem />
            </div>
        );
    }
}
class MovieItem extends React.Component {
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
ReactDOM.render(<MovieDetail />, document.getElementById('root'));
