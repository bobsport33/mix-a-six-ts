import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const HeroCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 700px;

    .hero__background-image {
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
                to right bottom,
                ${colors.gradient},
                ${colors.gradient2}
            ),
            url("/beer_bottles.jpg");
        background-position: center;
        background-size: auto 100%;
    }

    .hero__title {
        text-align: center;
        font-size: 8rem;
        color: ${colors.light};
        font-family: "ubantu";
        margin-bottom: 0;
    }

    .hero__subtitle {
        text-align: center;
        font-size: 3rem;
        color: ${colors.light};
        font-family: "ubantu";
    }
`;
const Hero = () => {
    return (
        <HeroCont>
            <div className="hero__background-image"></div>
            <h1 className="hero__title">Mix-a-six</h1>
            <h2 className="hero__subtitle">Create your own six pack</h2>
            <h2 className="hero__subtitle">have it delivered to your door</h2>
        </HeroCont>
    );
};

export default Hero;
