import React, { Component } from 'react';
import './MovieDetail.css'
 import DetailMovieInfo from '../DetailMovieInfo';
 import Header from '../Header';
 import SearchResult from '../SearchResult';
 import Footer from '../Footer';
 import pulpfiction from '../../images/pulp-fiction.jpg';

export default class MovieDetail extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="main-background-details">
                    <Header />
                    <DetailMovieInfo
                        fileName = {pulpfiction}
                        movieName = "Pulp Fiction"
                        genre = "Oscar-winning movies"
                        year = "1994"
                        duration = "154 min"
                        summary = "Weaving together three stories featuring a burger-loving hit man,
                            his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation
                            of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit"
                        director = "Director: Quentin Tarantino"
                        cast = "Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros"
                    />
                </div>
                <SearchResult />
                <Footer />
            </div>
        );
    }
}

/*ReactDOM.render(<MovieDetail />, document.getElementById('root'));*/
