import { useReducer } from "react";
import CartContext from "./cart-context";

enum CartActionType {
    ADD = "ADD",
    REMOVE = "REMOVE",
    CLEAR = "CLEAR",
}

interface CartAction {
    state: {};
    action: CartActionType;
}

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

interface DefaultCart {
    items: Item[];
    totalAmount: number;
    totalBeers: number;
}

const defaultCartState: DefaultCart = {
    items: [],
    totalAmount: 0,
    totalBeers: 0,
};

interface Context {
    items: Item[];
    totalAmount: number;
    totalBeers: number;
    addItem: (item: Item) => void;
    removeItem: (item: Item) => void;
    clearCart: () => void;
}

const cartReducer = (state: any, action: any) => {
    if (action.type === "ADD") {
        const updatedTotalBeers = state.totalBeers + 1;
        const updatedTotalAmount = state.totalAmount + action.item.price;

        const existingCartItemIndex = state.items.findIndex((item: Item) => {
            return item.beerId === action.item.beerId;
        });

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const updatedItem = action.item;
            updatedItem["amount"] = 1;
            updatedItems = state.items.concat(updatedItem);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalBeers: updatedTotalBeers,
        };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item: Item) => {
            return item.beerId === action.item.beerId;
        });

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalBeers = state.totalBeers - 1;

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(
                (item: Item) => item.beerId !== action.item.beerId
            );
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalBeers: updatedTotalBeers,
        };
    }
    if (action.type === "CLEAR") {
        return defaultCartState;
    }
};

const CartProvider = (props: any) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item: Item) => {
        cartDispatch({ type: "ADD", item: item });
    };

    const removeItemHandler = (item: Item) => {
        cartDispatch({ type: "REMOVE", item: item });
    };
    const clearCartHandler = () => {
        cartDispatch({ type: "CLEAR" });
    };

    const cartContext: Context = {
        items: cartState?.items,
        totalAmount: cartState?.totalAmount,
        totalBeers: cartState?.totalBeers,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
