import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect } from "react";
import { prisma } from "@/utlis/db";
import { StringLiteral } from "typescript";

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

export default function Home({ data }: Data) {
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
                <Products data={data} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const beer = await prisma.beer.findMany();
    const styles = await prisma.styles.findMany();

    return { props: { data: { beer, styles } } };
}
