import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import { prisma } from "@/utlis/db";
import { useState } from "react";

interface Styles {
    $modalOpen: boolean;
}

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
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = () => {
        const htmlElement = document.getElementsByTagName("html")[0];

        if (!modalOpen) {
            htmlElement.style.overflow = "hidden";
        } else {
            htmlElement.style.overflow = "";
        }

        setModalOpen(!modalOpen);
    };

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
                <Header onClick={modalHandler} />
                <Hero />
                <Products data={data} />
                {modalOpen && <Cart onClick={modalHandler} />}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const beer = await prisma.beer.findMany();
    const styles = await prisma.styles.findMany();

    return { props: { data: { beer, styles } } };
}
