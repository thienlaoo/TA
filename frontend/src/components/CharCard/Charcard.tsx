import cn from "classnames";
import { useParams } from "react-router-dom";
import './CharCard.scss';

export const CharCard = () => {

    const { id } = useParams();

    if (id === undefined) {
        return <div>Something went wrong...</div>;
    }

    const character = chars?.find((char) => char.id === parseInt(id, 10));

    if (!character) {
        return <div>Something went wrong...</div>;
    }

    const { name, status, species, image } = character;

    return (
        <article className="char_card">
            <img className="char_image" src={`${image}`} alt="char_img"/>


            <div className="card_desc">
                <div className="card_desc_name">{name}</div>
                <div className="card_desc_info">
                    <div className={cn({
                        'card_desc_color__unknown': status === 'unknown',
                        'card_desc_color__alive': status === 'Alive',
                        'card_desc_color__dead': status === 'Dead',
                    } )}></div>
                    <div className="card_desc_status">{`${status} - ${species}`}</div>
                </div>
                <div className="card_desc_section">
                    <span className="card_desc_text">Last known location:</span>
                    <span className="card_desc_first">Citadel of Ricks</span>
                </div>
                <div className="card_desc_section">
                    <span className="card_desc_text">First seen in:</span>
                    <span className="card_desc_first">Close Rick-counters of the Rick Kind</span>
                </div>
                    <div className="card_desc_other_info">
                    <span className="card_desc_text">Other Info</span>
                    <span className="card_desc_first char_info">The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting and promoting contemporary culture from the Arab world and beyond in London.</span>
                    <span className="card_desc_first">Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to championing creative and critical voices that are often underrepresented.</span>
                    </div>
                
            </div>
        </article>
    )
}