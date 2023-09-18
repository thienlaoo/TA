import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import { CharCard } from "../CharCard/Charcard";

export const CharPage = () => {
    return (
        <>
            <Header />
            <div className="main_container">
            <CharCard />
            </div>
            <Footer />
        </>
    )
}