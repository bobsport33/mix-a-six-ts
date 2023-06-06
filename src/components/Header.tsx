import { colors } from "@/styles/variables";
import React from "react";
import styled from "styled-components";

const HeaderCont = styled.div`
    z-index: 1;
    background-color: ${colors.primary};
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    .header__cart-btn {
        padding: 20px;
        border-radius: 50%;
        font-size: 3rem;

        color: ${colors.light};
    }

    .header__badge {
        background-color: ${colors.grey};
        color: ${colors.primary};
        padding: 5px 15px;
        border-radius: 50%;
    }
`;

const Header = () => {
    return (
        <HeaderCont>
            <div className="header__logo"></div>
            <div className="header__cart-btn">
                Cart <span className="header__badge">0</span>
            </div>
        </HeaderCont>
    );
};

export default Header;
