import React from "react";
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
`;

interface Data {
    id: number;
    title: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    style: string;
    price: number;
}

const ProductCard = ({
    id,
    title,
    imageUrl,
    imageAlt,
    description,
    style,
    price,
}: Data) => {
    return (
        <ProdCardCont>
            <h4 className="card__title">{title}</h4>
            <img src={imageUrl} alt={imageAlt} className="card__image" />
            <p className="card__description">{description}</p>
            <p className="card__style">Style: {style}</p>
            <p className="card__price">Price: ${price}</p>
            <button className="card__button">Add</button>
        </ProdCardCont>
    );
};

export default ProductCard;
