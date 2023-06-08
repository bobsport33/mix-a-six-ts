import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
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

interface Beer {
    beerId: string;
    brewery: string;
    img: string;
    name: string;
    price: number;
    styleId: string;
}

interface Style {
    id: string;
    name: string;
}
interface Data {
    data: { beer: Beer[]; styles: Style[] };
}

const Products = ({ data }: Data) => {
    const { beer: Beers, styles: Styles } = data;
    console.log(data.beer);
    return (
        <ProductsCont>
            <h3 className="products__heading">Available Beers</h3>
            <p className="products__description">
                You pick the beers, we deliver them to your door. Add beers to
                your cart to create a customized six-pack.
            </p>
            <div className="products__filters">
                <h4 className="products__filters--heading">Filters</h4>
            </div>
            <div className="products__grid">
                {data.beer.map((b: Beer) => {
                    return <ProductCard key={b.beerId} data={b} />;
                })}
            </div>
        </ProductsCont>
    );
};

export default Products;
