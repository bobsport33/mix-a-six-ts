import { createContext } from "react";

interface Item {
    amount: number;
    beerId: string;
    brewery: string;
    img: string;
    name: string;
    price: number;
    styleId: string;
}

interface Id {
    id: string;
}
interface Context {
    items: Item[];
    totalAmount: number;
    totalBeers: number;
    addItem: (item: Item) => void;
    removeItem: (item: Item) => void;
    clearCart: () => void;
}

const CartContext = createContext<Context>({
    items: [],
    totalAmount: 0,
    totalBeers: 0,
    addItem: (item: Item) => {},
    removeItem: (item: Item) => {},
    clearCart: () => {},
});

export default CartContext;
