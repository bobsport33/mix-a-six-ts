import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CartCardCont = styled.div`
    .card__btn {
        border: 1px solid var(--color-primary);
        background-color: var(--color-grey);
        border-radius: 50px;
        margin-left: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        transition: all 0.1s;
    }
`;

interface Item {
    item: {
        beerId: string;
        brewery: string;
        img: string;
        name: string;
        price: number;
        styleId: string;
    };
}

const CartCard = ({ item }: Item) => {
    console.log(item);
    return (
        <CartCardCont>
            <h5 className="card__title">
                {item.brewery} {item.name}
            </h5>

            <img className="card__img" src={item.img} alt={"beer label"} />
            <div className="card__quantities">
                <p className="card__amount">Quantity: </p>
                <p className="card__price">${item.price.toFixed(2)} each</p>
                <p className="card__total">Total: $</p>
                <button className="card__btn">+</button>
                <button className="card__btn">-</button>
            </div>
        </CartCardCont>
    );
};

export default CartCard;
