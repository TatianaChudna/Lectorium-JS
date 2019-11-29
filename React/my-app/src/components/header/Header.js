import React, { Component } from 'react';

export default class Header extends Component {
    handlerButton = () => {
        alert('You reserve a boat!');
    };

    render() {
        return (
            <>
                <div className="header-wrapper">
                    <nav className="main-menu">
                        <h1>
                            <img src="/images/logo.png" alt="logo"/>
                        </h1>
                        <ul className="navigation-menu">
                            <li><p>Top destinations</p></li>
                            <li><p>Add your boat</p></li>
                            <li><p>Sign up</p></li>
                        </ul>
                    </nav>
                    <div className="banner">
                        <h2>Reserve a boat now!</h2>
                        <p>And set your sails into paradise!</p>
                        <button onClick={this.handlerButton}>{this.props.name}</button>
                    </div>
                </div>
            </>
        );
    }
}