import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Charcard.scss';
import { RootState } from "../types/Hero";

export const CharCard = () => {
    const heroes = useSelector((state: RootState) => state.heroes);
    const { id } = useParams();

    if (id === undefined) {
        return <div>Something went wrong...</div>;
    }

    const character = heroes?.find((hero) => hero.id === parseInt(id, 10));

    if (!character) {
        return <div>Something went wrong...</div>;
    }

    const { nickname, real_name, catch_phrase, images, origin_description, superpowers } = character;
    const imagesArray = JSON.parse(images);

    return (
        <article className="char_card">
            <img className="char_image" src={imagesArray[0]} alt="char_img"/>


            <div className="card_desc">
                <div className="card_desc_name">{nickname}</div>
                <div className="card_desc_name">{real_name}</div>
                <div className="card_desc_section">
                    <span className="card_desc_text">{catch_phrase}</span>
                    <span className="card_desc_first">{origin_description}</span>
                </div>
                <div className="card_desc_section">
                    <span className="card_desc_text">{superpowers}</span>
                </div>
            </div>
        </article>
    )
}