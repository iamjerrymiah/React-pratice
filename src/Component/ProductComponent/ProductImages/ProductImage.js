import React from "react";

import prodImg from "../../../assets/images/italian-gold-marble.jpeg";
import './ProductImage.css';

const productImage = ( props ) =>(
    <div className="ProdImg">
        <img src={prodImg} alt="prodImg"/>
    </div>
)

export default productImage;