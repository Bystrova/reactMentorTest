import React, { Component } from 'react';
import ToggleButtonGroup from './ToggleButtonGroup';
import './SearchPanel.css';

export default class  SearchPanel extends React.Component {
    render() {
        return (
            <div className="search-panel">
                <div className="search search-title">find your movie</div>
                <div className="search search-field">
                    <input type="text" maxLength="100"/>
                    <div>
                        <img src="../images/enter-arrow.png"/>
                    </div>
                </div>
                <div className="search search-settings">
                    <div className="search-button-title ">search by</div>
                    <ToggleButtonGroup/>
                </div>
            </div>
        );
    }
}