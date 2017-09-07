import React, { Component } from 'react';
import Button from '../Button/Button';
import './ToggleButtonGroup.css';

export default class ToggleButtonGroup extends Component {
    render() {
        return (
            <div className="toggle-button-group">
                <div className="search-button-wrapper">
                    <Button type="secondary" size="btn-sm" title="title" className="btn"/>
                    <Button type="secondary" size="btn-sm" title="director" className="btn"/>
                </div>
                <Button type="primary" size="btn-big" title="search" className="btn"/>
            </div>
        );
    }
}