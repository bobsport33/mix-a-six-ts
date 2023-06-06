import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const ProductsCont = styled.section`
    background-color: ${colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;

    .products__heading {
        color: ${colors.primary};
    }
`;

const Products = () => {
    return (
        <ProductsCont>
            <h3 className="products__heading">Available Beers</h3>
            <p className="products__description">
                You pick the beers, we deliver them to your door. Add beers to
                your cart to create a customized six-pack.
            </p>
            <div className="products__grid"></div>
        </ProductsCont>
    );
};

export default Products;
