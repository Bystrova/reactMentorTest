import React, { Component } from 'react';
import './Button.css';

export default class Button extends React.Component {
    render() {
        return (
            <button className={`${this.props.type} ${this.props.size} ${this.props.className}`}>{this.props.title}</button>
        );
    }
}