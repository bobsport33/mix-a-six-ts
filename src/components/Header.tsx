import React from "react";
import styled from "styled-components";

const HeaderCont = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <HeaderCont>
            <div className="header__logo">Logo</div>
            <div className="header__cart-btn">Cart</div>
        </HeaderCont>
    );
};

export default Header;
