import React, { useContext } from "react";
import CartContext from "@/store/cart-context";
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
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;

    .card__title {
        font-size: 3rem;
        text-align: center;
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
        amount?: number;
        beerId: string;
        brewery: string;
        img: string;
        name: string;
        price: number;
        styleId: string;
    };
}

const ProductCard = ({ data }: Data) => {
    const cartCtx = useContext(CartContext);
    const clickHandler = () => {
        cartCtx.addItem(data);
    };
    return (
        <ProdCardCont>
            <h4 className="card__title">
                {data.brewery} {data.name}
            </h4>
            <img
                src={data.img}
                alt="can or bottle of beer"
                className="card__image"
            />

            <div className="card__row">
                <p className="card__style">Style: {data.styleId}</p>
                <p className="card__price">Price: ${data.price}</p>
                <Button text="+" onClick={clickHandler} />
            </div>
        </ProdCardCont>
    );
};

export default ProductCard;
