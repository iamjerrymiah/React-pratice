import React from "react";

import navigatePicture from '../../assets/images/navpicture.jpg';
import './NavPicture.css';

const navPicture = ( props ) =>(
    <div>
        <img className="NavPic" src={navigatePicture} alt="NavPicture" />
    </div>
);

export default navPicture;