import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import ProductImage from "../../Component/ProductComponent/ProductImages/ProductImage";
import ProductSummary from "../../Component/ProductComponent/ProductSummary/ProductSummary";
import './ProductBuilder.css';

class ProductBuilder extends Component {
    render() {
        return(
            <Aux>
                <div className="ProdBuilder">
                    <ProductImage />
                    <ProductSummary />
                </div>
            </Aux>
        )
    }
}

export default ProductBuilder;