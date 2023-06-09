import React from "react";

import styled from "styled-components";

const CartCont = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: pink;
    z-index: -10;
    font-size: 4rem;
`;

const Cart = () => {
    return <CartCont>Cart</CartCont>;
};

export default Cart;
