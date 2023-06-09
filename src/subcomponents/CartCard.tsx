import Image from "next/image";
import React, { useContext, MouseEvent } from "react";
import styled from "styled-components";
import { colors } from "@/styles/variables";
import CartContext from "@/store/cart-context";

interface Item {
    item: {
        amount?: number;
        beerId: string;
        brewery: string;
        img: string;
        name: string;
        price: number;
        styleId: string;
    };
}

const CartCardCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;

    .card__left {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
    }

    .card__right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .card__title {
        font-size: 2rem;
    }

    .card__img {
        max-height: 50px;
        width: auto;
        object-fit: contain;
    }

    .card__btn-cont {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .card__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${colors.primary};
        background-color: ${colors.grey};
        border-radius: 50px;
        width: 30px;
        height: 30px;
        transition: all 0.1s;
        font-size: 2rem;
        &:hover {
            cursor: pointer;
        }
    }
`;

const CartCard = ({ item }: Item) => {
    const cartCtx = useContext(CartContext);

    const addItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
        cartCtx.addItem(item);
    };
    const removeItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
        cartCtx.removeItem(item);
    };
    return (
        <CartCardCont>
            <div className="card__left">
                <h5 className="card__title">
                    {item.brewery} {item.name}
                </h5>
                <img className="card__img" src={item.img} alt={"beer label"} />
            </div>
            <div className="card__right">
                <div className="card__btn-cont">
                    <button className="card__btn" onClick={addItemHandler}>
                        +
                    </button>
                    <button className="card__btn" onClick={removeItemHandler}>
                        -
                    </button>
                </div>
                <p className="card__price">${item.price.toFixed(2)} each</p>
                <p className="card__amount">Qty: {item.amount}</p>
                {item.amount && (
                    <p className="card__total">
                        Total: ${(item.amount * item.price).toFixed(2)}
                    </p>
                )}
            </div>
        </CartCardCont>
    );
};

export default CartCard;
