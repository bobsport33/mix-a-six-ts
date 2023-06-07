import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import ProductData from "../store/Products-Data";
import ProductCard from "@/subcomponents/ProductCard";

const ProductsCont = styled.section`
    background-color: ${colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 0;

    .products__heading {
        color: ${colors.primary};
    }

    .products__grid {
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
`;

const Products = () => {
    const data = ProductData();
    return (
        <ProductsCont>
            <h3 className="products__heading">Available Beers</h3>
            <p className="products__description">
                You pick the beers, we deliver them to your door. Add beers to
                your cart to create a customized six-pack.
            </p>
            <div className="products__grid">
                {data.map((beer) => {
                    return <ProductCard data={beer} />;
                })}
            </div>
        </ProductsCont>
    );
};

export default Products;
