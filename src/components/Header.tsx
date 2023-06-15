import CartContext from "@/store/cart-context";
import { colors } from "@/styles/variables";
import React, { useContext } from "react";
import styled from "styled-components";

const HeaderCont = styled.div`
    z-index: 1;
    background-color: ${colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .header__logo {
        height: 70px;
    }

    .header__img {
        height: 100%;
    }
    .header__cart-btn {
        border-radius: 50%;
        font-size: 3rem;

        color: ${colors.light};

        &:hover {
            cursor: pointer;
        }
    }

    .header__badge {
        background-color: ${colors.grey};
        color: ${colors.primary};
        padding: 5px 15px;
        border-radius: 50%;
    }
`;

interface Header {
    onClick: () => void;
}

const Header = ({ onClick }: Header) => {
    const cartCtx = useContext(CartContext);
    return (
        <HeaderCont>
            <div className="header__logo">
                <img
                    src="/logo-no-background.png"
                    alt="logo"
                    className="header__img"
                />
            </div>
            <div className="header__cart-btn" onClick={onClick}>
                Cart <span className="header__badge">{cartCtx.totalBeers}</span>
            </div>
        </HeaderCont>
    );
};

export default Header;
