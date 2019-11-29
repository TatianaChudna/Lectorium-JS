import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer-container">
                    <ul className="footer-content">
                        <li className="location">
                            <h6>Top locations</h6>
                            <p>Lorem ipsum dolor Sit amet consectetur Adipisicing elit Eiusmod tempor Incididunt ut
                                labore</p>
                        </li>
                        <li className="boat">
                            <h6>Featured boats</h6>
                            <p>Lorem ipsum dolor Sit amet consectetur Adipisicing elit Eiusmod tempor </p>
                        </li>
                        <li className="contact">
                            <h6>Contact us</h6>
                            <p>Lorem ipsum dolor Sit amet consectetur Adipisicing elit Eiusmod tempor Incididunt ut
                                labore</p>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}