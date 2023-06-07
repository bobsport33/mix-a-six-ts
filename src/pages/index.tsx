import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";

export default function Home() {
    let beers;
    useEffect(() => {
        (async () => {
            const data = await fetch("/api/beer");
            beers = await data.json();
            console.log(beers);
        })();
    }, []);
    return (
        <>
            <Head>
                <title>Mix-a-Six</title>
                <meta
                    name="description"
                    content="Website to build custom craft beer six packs"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Hero />
                <Products />
            </main>
        </>
    );
}
