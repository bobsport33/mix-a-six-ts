import { createContext } from "react";

interface Item {
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
    removeItem: (id: Id) => void;
    clearCart: () => void;
}

const CartContext = createContext<Context>({
    items: [],
    totalAmount: 0,
    totalBeers: 0,
    addItem: (item: Item) => {},
    removeItem: (id: Id) => {},
    clearCart: () => {},
});

export default CartContext;
