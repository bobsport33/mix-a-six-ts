import CartContext from "@/store/cart-context";
import Button from "@/subcomponents/Button";
import React, {
    MouseEvent,
    useContext,
    useState,
    useEffect,
    useRef,
} from "react";
import CartCard from "@/subcomponents/CartCard";

import styled from "styled-components";

const CartCont = styled.div`
    position: fixed;
    bottom: 0;
    height: calc(100vh - 110px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .cart__modal {
        max-height: 93%;
        width: fit-content;
        min-width: 50%;
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0, 0.5rem 2rem rgba(0, 0, 0, 0.8);
        z-index: 30;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
    }

    .cart__list {
        overflow-y: scroll;
        max-height: 50%;
        display: flex;
        flex-direction: column;

        & > :not(:last-child) {
            border-bottom: 2px solid black;
        }
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

    .cart__checking-out {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .cart__form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cart__form--section {
        display: flex;
        flex-direction: column;

        label {
            font-size: 1.6rem;
            margin-bottom: 5px;
        }
        input {
            height: 30px;
        }
    }

    .cart__form--small-section {
        display: flex;
        gap: 20px;

        /* input {
            width: 40%;
        } */
    }

    .cart__details {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .cart__beers,
    .cart__price {
        align-self: flex-end;
    }

    .cart__back-btn {
    }
`;
interface Cart {
    onClick: () => void;
}
interface FormInput {
    firstName?: String;
    lastName?: String;
    creditCardNumber?: String;
    exp?: String;
    pin?: Number;
}

const Cart = ({ onClick }: Cart) => {
    const cartCtx = useContext(CartContext);
    const [canCheckout, setCanCheckout] = useState(false);
    const [itemInCart, setItemInCart] = useState(false);
    const [checkingOut, setCheckingOut] = useState(false);
    const formInputRef = useRef<FormInput>({});

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

    const checkoutHandler = () => {
        setCheckingOut(true);
    };

    return (
        <CartCont id={"cart__cont"} onClick={backgroundClickHandler}>
            <div className="cart__modal">
                {!checkingOut && (
                    <>
                        <h4 className="cart__header">Shopping Cart</h4>
                        <div className="cart__list">
                            {cartCtx.items.map((item) => {
                                return (
                                    <CartCard key={item.beerId} item={item} />
                                );
                            })}
                        </div>
                        <div className="cart__details">
                            <h5 className="cart__beers">
                                Number of Beers: {cartCtx.totalBeers}
                            </h5>
                            <h5 className="cart__price">
                                Total Price: ${cartCtx.totalAmount.toFixed(2)}
                            </h5>
                            <div className="cart__checkout">
                                <div className="cart__section">
                                    <Button text="Close" onClick={onClick} />
                                    {itemInCart && (
                                        <Button
                                            text="Clear Cart"
                                            onClick={cartCtx.clearCart}
                                        />
                                    )}
                                </div>
                                <div className="cart__checkout-cont">
                                    {canCheckout && (
                                        <Button
                                            text="Checkout"
                                            onClick={checkoutHandler}
                                        />
                                    )}
                                    {!canCheckout && (
                                        <p>
                                            *Must have increments of 6 to
                                            checkout
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {checkingOut && (
                    <div className="cart__checking-out">
                        <div className="cart__back-btn">
                            <Button
                                text="Back"
                                onClick={() => {
                                    setCheckingOut(false);
                                }}
                            />
                        </div>
                        <div className="cart__details">
                            <div className="cart__checkout">
                                <form action="" className="cart__form">
                                    <div className="cart__form--section">
                                        <label htmlFor="first_name">
                                            First Name
                                        </label>
                                        <input
                                            id="first_name"
                                            type="text"
                                            ref={(ref) =>
                                                (formInputRef.current.firstName =
                                                    ref?.value ?? " ")
                                            }
                                        />
                                    </div>
                                    <div className="cart__form--section">
                                        <label htmlFor="last_name">
                                            Last Name
                                        </label>
                                        <input id="last_name" type="text" />
                                    </div>
                                    <div className="cart__form--section">
                                        <label htmlFor="credit_card">
                                            Credit Card
                                        </label>
                                        <input id="credit_card" type="text" />
                                    </div>
                                    <div className="cart__form--small-section">
                                        <div className="cart__form--section">
                                            <label htmlFor="exp">Exp</label>
                                            <input id="exp" type="text" />
                                        </div>
                                        <div className="cart__form--section">
                                            <label htmlFor="pin">Pin</label>
                                            <input id="pin" type="text" />
                                        </div>
                                    </div>
                                    <h5 className="cart__beers">
                                        Number of Beers: {cartCtx.totalBeers}
                                    </h5>
                                    <h5 className="cart__price">
                                        Total Price: $
                                        {cartCtx.totalAmount.toFixed(2)}
                                    </h5>
                                    <div className="cart__section">
                                        {canCheckout && (
                                            <Button
                                                text="Submit"
                                                onClick={checkoutHandler}
                                            />
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </CartCont>
    );
};

export default Cart;
