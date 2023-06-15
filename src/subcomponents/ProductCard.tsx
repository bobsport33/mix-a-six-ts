import React, { useContext, useState } from "react";
import CartContext from "@/store/cart-context";
import Button from "./Button";
import styled from "styled-components";
import { colors } from "@/styles/variables";

const ProdCardCont = styled.div`
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;

    .cart__btns {
        background-image: linear-gradient(
            to right bottom,
            ${colors.grey},
            ${colors.grey2}
        );
        border-radius: 3px;
        box-shadow: 0 0.25rem 0.5rem ${colors.primary};
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .card__button {
        background-color: transparent;
        color: ${colors.primary};
        padding: 5px;
        margin: 0.5rem;
        border: none;
        transition: all 0.1s;
        font-size: 2rem;

        &:hover {
            cursor: pointer;
            background-color: ${colors.primary2};
        }

        &:active {
            background-color: ${colors.primary};
            transform: translateY(2px);
        }
    }

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
    const addItemHandler = () => {
        cartCtx.addItem(data);
    };
    const removeItemHandler = () => {
        cartCtx.removeItem(data);
    };

    const ctxItem = cartCtx.items.filter((item) => {
        return item.beerId === data.beerId;
    })[0];

    return (
        <ProdCardCont>
            <div className="cart__btns">
                {ctxItem && (
                    <button
                        className="card__button"
                        onClick={removeItemHandler}
                    >
                        -
                    </button>
                )}
                <p>{ctxItem && ctxItem.amount}</p>
                <button className="card__button" onClick={addItemHandler}>
                    {ctxItem ? "+" : "+ Add"}
                </button>
            </div>
            <img
                src={data.img}
                alt="can or bottle of beer"
                className="card__image"
            />
            <h4 className="card__title">
                {data.brewery} {data.name}
            </h4>

            <div className="card__row">
                <p className="card__style">Style: {data.styleId}</p>
                <p className="card__price">Price: ${data.price.toFixed(2)}</p>
            </div>
        </ProdCardCont>
    );
};

export default ProductCard;
