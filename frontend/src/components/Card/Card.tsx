import React from "react";
import { Hero } from "../types/Hero";
import "./Card.scss";
import { Link } from "react-router-dom";

interface Props {
    hero: Hero;
}

export const Card: React.FC<Props> = ({ hero }) => {
    const { id, nickname, real_name, catch_phrase, images } = hero;
    const imagesArray = JSON.parse(images);
    console.log(imagesArray[0]);
    const charUrl = `/heroes/${id}`;
    return (
        <Link to={charUrl}>
            <div className="card">
                <div className="card_image_container">
                    <img className="card_image" src={imagesArray[0]} alt="char_img" />
                </div>
                <div className="card_desc">
                    <div className="card_desc_name">{nickname}</div>
                    <div className="card_desc_name">{real_name}</div>

                    <div className="card_desc_section">
                        <span className="card_desc_text">{catch_phrase}</span>
                    </div>
                </div>
            </div>
        </Link>

    );
};
