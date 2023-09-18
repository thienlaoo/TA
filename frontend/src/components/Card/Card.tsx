import React from "react";
import { Superman } from "../types/temp";
import "./Card.scss";

interface Props {
    superman: Superman;
}

export const Card: React.FC<Props> = ({ superman }) => {
    //const charUrl = `/characters/${id}`;
    const tempimage = 'https://people.com/thmb/ymEghRbHxdjLK5JoI-2Oiw-R3FA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x409:691x411):format(webp)/Ezra-Miller-as-Flash-Warner-Bros-080422-1a1d7a5357a84f5e8fe25fc4833afeef.jpg';
    return (
        <div className="card">
            <div className="card_image_container">
                <img className="card_image" src={`${tempimage}`} alt="char_img" />
            </div>
            <div className="card_desc">
                <div className="card_desc_name">{superman.nickname}</div>
                <div className="card_desc_name">{superman.real_name}</div>

                <div className="card_desc_section">
                    <span className="card_desc_text">{superman.catch_phrase}</span>
                </div>
            </div>
        </div>
    );
};
