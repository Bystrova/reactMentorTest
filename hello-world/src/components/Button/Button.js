import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { type, size, className, title } = this.props;
        return (
            <button className={`${type} ${size} ${className}`}>{title}</button>
        );
    }
}