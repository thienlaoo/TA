import React, { useState } from "react";
import "./Cardlist.scss";
import { Card } from "../Card/Card";
import { Superman } from "../types/temp";
import { Pagination } from "../Pagination/Pagination";

interface Props {
    supermens: Superman[];
}

export const Cardlist: React.FC<Props> = ({ supermens }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6;

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const displayedChars = () => {
        if (supermens) {
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            return supermens.slice(startIndex, endIndex);
        }
        return [];
    }

    return (
        <div className="main_container">
            <div className="list_wrapper">
                <div className="cardlist_container">
                    <div className="cardlist">
                        {displayedChars().map((superman, index) => (
                            <Card key={index} superman={superman} />
                        ))}
                    </div>
                </div>
            </div>
            <Pagination
                total={Math.ceil((supermens?.length || 0) / perPage)}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    );
};
