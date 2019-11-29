import React, { Component } from 'react';

export default class SecondMainSection extends Component {
    constructor(props) {
        super(props);
        this.money = 'money';
    }

    handlerButton = () => {
        alert('You did it!');
    };

    render() {
        return (
            <>
                <div className="second-section">
                    <div className="banner">
                        <h2>Have your own boat?</h2>
                        <p>Navigare necesse est, vivere non est necesse</p>
                        <div className="link-button">
                            <button onClick={this.handlerButton}>Make {this.money} with your boat!</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}