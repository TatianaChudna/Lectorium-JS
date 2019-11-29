import React, {Component} from 'react';

export default class FirstMainSection extends Component {
    // constructor(props) {
    //     super(props);
    // }
    //
    render() {

        let array = ["img1", "img2", "img3", "img4", "img5"];

        let images = array.map(image => {
            return <img key={image} src={(`/images/${image}.jpg`)} alt="" />
        });

        return (
            <>
                <div className="plate-section">
                    <div className="container">
                        <h4>Explore our top destinations</h4>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt
                            ut labore et</p>
                        <ul>
                            <li>
                                {images}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}