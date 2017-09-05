import React, { Component } from 'react';
import Button from './Button';
import './ResultSorting.css';


export default class ResultSorting extends React.Component {
    render() {
        return (
            <div className="result-sorting">
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