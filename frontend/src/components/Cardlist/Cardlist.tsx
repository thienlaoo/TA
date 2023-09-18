import React, { useState } from "react";
import "./Cardlist.scss";
import { Card } from "../Card/Card";
import { Hero } from "../types/Hero";
import { Pagination } from "../Pagination/Pagination";

interface Props {
    heroes: Hero[] | null;
}

export const Cardlist: React.FC<Props> = ({ heroes }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6;

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const displayedChars = () => {
        if (heroes) {
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            return heroes.slice(startIndex, endIndex);
        }
        return [];
    }

    return (
        <div className="main_container">
            <div className="list_wrapper">
                <div className="cardlist_container">
                    <div className="cardlist">
                        {displayedChars().map((hero, index) => (
                            <Card key={index} hero={hero} />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination
                total={Math.ceil((heroes?.length || 0) / perPage)}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    );
};
