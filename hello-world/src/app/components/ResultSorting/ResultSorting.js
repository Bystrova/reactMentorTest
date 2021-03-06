import React, { Component } from 'react';
import Button from '../Button/Button';
import './ResultSorting.css';


export default class ResultSorting extends Component {
    render() {
        return (
            <div className="result-sorting">
               {/* <div className="search producer-name">
                    Film by Quentin Tarantino
                </div>*/}
                <div className="search detail">
                    <div>7 movies found</div>
                    <div className="sorting-detail">
                        <div>Sort by</div>
                        <Button type="flat" title="Release date" className />
                        <Button type="flat" title="Rating" className />
                    </div>
                </div>
            </div>
        );
    }
}