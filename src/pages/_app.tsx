import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import CartProvider from "@/store/CartProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <GlobalStyles />
            <Component {...pageProps} />
        </CartProvider>
    );
}
