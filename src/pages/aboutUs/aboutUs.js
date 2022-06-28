import React from 'react';
import './AboutUs.css';

function AboutUs(props) {

    const {product, text} = props
    return (
        <div className='blue'>
            <p>About Us</p>
            {props.text}
            -----------
            <ul>
                <li>name:{product?.name}</li>
                <li>address:{product?.address}</li>
                <li>media:{product?.media}</li>
            </ul>
        </div>
    );
}

export default AboutUs;