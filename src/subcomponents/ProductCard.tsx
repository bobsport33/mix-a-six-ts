import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { colors } from "@/styles/variables";

const ProdCardCont = styled.div`
    background-image: linear-gradient(
        to right bottom,
        ${colors.grey},
        ${colors.grey2}
    );
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;

    .card__title {
        font-size: 3rem;
    }

    .card__image {
        height: 200px;
    }

    .card__description {
        text-align: center;
        font-size: 2rem;
    }

    .card__row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

interface Data {
    data: {
        id: number;
        brewery: string;
        name: string;
        imageUrl: string;
        imageAlt: string;
        description: string;
        style: string;
        price: number;
    };
}

const ProductCard = ({ data }: Data) => {
    const clickHandler = () => {};
    return (
        <ProdCardCont>
            <h4 className="card__title">
                {data.brewery} {data.name}
            </h4>
            <img
                src={data.imageUrl}
                alt={data.imageAlt}
                className="card__image"
            />
            <p className="card__description">{data.description}</p>
            <div className="card__row">
                <p className="card__style">Style: {data.style}</p>
                <p className="card__price">Price: ${data.price}</p>
                <Button text="+" onClick={clickHandler} />
            </div>
        </ProdCardCont>
    );
};

export default ProductCard;
