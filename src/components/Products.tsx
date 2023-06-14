import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import ProductCard from "@/subcomponents/ProductCard";

const ProductsCont = styled.section`
    background-color: ${colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 0;

    .products__heading {
        color: ${colors.primary};
    }

    .products__grid {
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 1250px;
    }

    .products__filters {
        padding: 20px;
        max-width: 90%;
        border-radius: 20px;
        background-color: ${colors.grey2};
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .products__filter-container {
        display: flex;
        gap: 25px;
    }

    .products__checkbox {
        display: none;

        &:checked + .products__filter {
            &::before {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/%3E%3C/svg%3E");
            }
        }
    }

    .products__filter {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 2.4rem;

        &::before {
            content: "";
            display: block;
            height: 20px;
            width: 20px;
            background-color: ${colors.grey};
        }
        &:hover {
            cursor: pointer;
        }
    }
`;

interface Beer {
    beerId: string;
    brewery: string;
    img: string;
    name: string;
    price: number;
    styleId: string;
}

interface Style {
    id: string;
    name: string;
}
interface Data {
    data: { beer: Beer[]; styles: Style[] };
}

const Products = ({ data }: Data) => {
    const filterCont = useRef<HTMLDivElement>(null);
    const [filters, setFilters] = useState<String[]>([]);

    const beers = data.beer.map((b) => {
        const styleName: Style = data.styles.find(
            (style) => style.id === b.styleId
        )!;
        if (styleName) {
            b.styleId = styleName.name;
        }

        return b;
    });

    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const newFilter = [...filters, e.target.id];
            setFilters(newFilter);
        } else {
            const newFilter = filters.filter((filter) => {
                return filter !== e.target.id;
            });
            setFilters(newFilter);
        }
    };

    return (
        <ProductsCont>
            <h3 className="products__heading">Available Beers</h3>
            <p className="products__description">
                You pick the beers, we deliver them to your door. Add beers to
                your cart to create a customized six-pack.
            </p>
            <div className="products__filters">
                <h4 className="products__filters--heading">Filters</h4>
                <div className="products__filter-container" ref={filterCont}>
                    {data.styles.map((style) => {
                        return (
                            <React.Fragment key={style.name}>
                                <input
                                    id={style.name}
                                    type="checkbox"
                                    className="products__checkbox"
                                    onChange={filterHandler}
                                />
                                <label
                                    className="products__filter"
                                    htmlFor={style.name}
                                >
                                    {style.name}
                                </label>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="products__grid">
                {beers.map((b: Beer) => {
                    if (filters.length === 0) {
                        return <ProductCard key={b.beerId} data={b} />;
                    } else if (filters.includes(b.styleId)) {
                        return <ProductCard key={b.beerId} data={b} />;
                    }
                })}
            </div>
        </ProductsCont>
    );
};

export default Products;
