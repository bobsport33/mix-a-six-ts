import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/variables";

const BtnCont = styled.button`
    background-color: ${colors.primary};
    color: ${colors.grey};
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem ${colors.primary};
    transition: all 0.1s;

    &:hover {
        cursor: pointer;
        background-color: ${colors.primary2};
    }

    &:active {
        background-color: ${colors.primary};
        transform: translateY(2px);
    }
`;

interface Btn {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: Btn) => {
    return <BtnCont onClick={onClick}>{text}</BtnCont>;
};

export default Button;
