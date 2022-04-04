import React, { Component } from "react";

import Button from '../../UI/Button/Button';
import './ProductSummary.css';

class ProductSummary extends Component {
    render(){
        return(
            <div className="ProductSummary">
                <h4>Italian Gold Marble for Floors</h4>
                <p>Size: 30X60, 60X60, 60X90</p>
                <p>Price: ₦7,000 - ₦15,000 depending on the size</p>
                <Button>Contact</Button>
            </div>
        )
    }
}

export default ProductSummary;