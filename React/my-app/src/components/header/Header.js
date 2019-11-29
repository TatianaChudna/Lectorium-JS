import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    handlerButton = () => {
        alert('You reserve a boat!')
    };

    render() {
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <nav className="main-menu">
                        <h1>
                            <img src="/images/logo.png" alt="logo"/>
                        </h1>
                        <ul className="navigation-menu">
                            <li><a href="https://fontawesome.com/" title="top destinations">Top destinations</a></li>
                            <li><a href="https://fontawesome.com/" title="add your boat">Add your boat</a></li>
                            <li><a href="https://fontawesome.com/" title="sign up">Sign up</a></li>
                        </ul>
                    </nav>
                    <div className="banner">
                        <h2>Reserve a boat now!</h2>
                        <p>And set your sails into paradise!</p>
                        <button onClick={this.handlerButton}>Reserve</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}