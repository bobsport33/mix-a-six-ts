import CartContext from "@/store/cart-context";
import Button from "@/subcomponents/Button";
import React, { MouseEvent, useContext, useState, useEffect } from "react";
import CartCard from "@/subcomponents/CartCard";

import styled from "styled-components";

const CartCont = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 4rem;

    .cart__modal {
        position: fixed;
        top: 15vh;
        height: 80vh;
        left: 10%;
        width: 80%;
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0, 0.5rem 2rem rgba(0, 0, 0, 0.8);
        z-index: 30;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart__list {
        overflow-y: scroll;
        max-height: 50vh;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .cart__checkout {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .cart__section {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }
`;
interface Cart {
    onClick: () => void;
}

const Cart = ({ onClick }: Cart) => {
    const cartCtx = useContext(CartContext);
    const [canCheckout, setCanCheckout] = useState(false);
    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        if (cartCtx.totalBeers > 0) {
            setItemInCart(true);
        }
        if (cartCtx.totalBeers === 0) {
            setItemInCart(false);
            return;
        }
        if (cartCtx.totalBeers % 6 === 0) {
            setCanCheckout(true);
        } else {
            setCanCheckout(false);
        }
    }, [cartCtx]);

    const backgroundClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLButtonElement).id === "cart__cont") {
            onClick();
        }
    };

    const checkoutHandler = () => {};

    return (
        <CartCont id={"cart__cont"} onClick={backgroundClickHandler}>
            <div className="cart__modal">
                <h4 className="cart__header">Shopping Cart</h4>
                <div className="cart__list">
                    {cartCtx.items.map((item) => {
                        return <CartCard key={item.beerId} item={item} />;
                    })}
                </div>
                <div className="cart__details">
                    <h5 className="cart__beers">
                        Number of Beers: {cartCtx.totalBeers}
                    </h5>
                    <h5 className="cart__price">
                        Total Price: ${cartCtx.totalAmount}
                    </h5>
                    <div className="cart__checkout">
                        <div className="cart__section">
                            <Button text="Close" onClick={onClick} />
                            {canCheckout && (
                                <Button
                                    text="Checkout"
                                    onClick={checkoutHandler}
                                />
                            )}
                            {!canCheckout && (
                                <p>*Must have increments of 6 to checkout</p>
                            )}
                        </div>
                        {itemInCart && (
                            <Button
                                text="Clear Cart"
                                onClick={cartCtx.clearCart}
                            />
                        )}
                    </div>
                </div>
            </div>
        </CartCont>
    );
};

export default Cart;
