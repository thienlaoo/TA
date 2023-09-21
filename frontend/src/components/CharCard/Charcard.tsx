import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateHero } from '../Redux/actions';
import { Hero } from "../types/Hero";
import { patchHero } from "../Helpers/editHelper";
import { getHeroById } from "../Helpers/fetchHelper";
import { deleteHero } from "../Helpers/deleteHelper";
import './Charcard.scss';

export const CharCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const heroId: number = id ? parseInt(id, 10) : 0;

    const [hero, setHero] = useState<Hero | null>(null);
    const [openPhoto, setOpenPhoto] = useState(false);
    const [deleted, setDeleted] = useState(true);

    const handleImageClick = (index: number) => {

        setOpenPhoto(!openPhoto);

        localStorage.setItem('selectedImageIndex', index.toString());
        console.log(index);
    };

    const toggleIsOpen = () => {
        setOpenPhoto(!openPhoto);
    };

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await getHeroById(`http://localhost:3001/heroes/${id}`);
                setHero(response);
            } catch (error) {
                console.error("Error fetching hero:", error);
            }
        };

        fetchHero();
    }, [id]);

    const [updatedData, setUpdatedData] = useState({
        id: heroId,
        nickname: "",
        real_name: "",
        catch_phrase: "",
        origin_description: "",
        superpowers: "",
        images: hero?.images || "",
    });

    const [openFields, setOpenFields] = useState({
        nickname: false,
        real_name: false,
        catch_phrase: false,
        origin_description: false,
        superpowers: false,
    });

    const [previousValues, setPreviousValues] = useState({});

    if (id === undefined || !hero) {
        return <div>Something went wrong...</div>;
    }

    const { nickname, real_name, catch_phrase, origin_description, superpowers, images } = hero;
    const imagesArray = JSON.parse(images);

    const handleFieldDoubleClick = (fieldName: string) => {
        setOpenFields((prevOpenFields) => ({
            ...prevOpenFields,
            [fieldName]: true,
        }));
    };

    const handleFieldChange = (fieldName: keyof typeof updatedData, value: string) => {
        setUpdatedData((prevData) => ({
            ...prevData,
            [fieldName]: value !== hero[fieldName] ? value : prevData[fieldName],
        }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        handleFieldChange(name as keyof typeof updatedData, value);
    };

    const handleFieldBlur = (fieldName: keyof typeof updatedData) => {
        setPreviousValues({ ...previousValues, [fieldName]: updatedData[fieldName] });

        setOpenFields((prevOpenFields) => ({
            ...prevOpenFields,
            [fieldName]: false,
        }));
    };




    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const responseData = await patchHero(id, updatedData);
            setUpdatedData(responseData);

            dispatch(updateHero(id, responseData));
            console.log('Updated hero:', responseData);
        } catch (error) {
            console.error('Error updating hero:', error);
        }

        setOpenFields({
            nickname: false,
            real_name: false,
            catch_phrase: false,
            origin_description: false,
            superpowers: false,
        });
    };

    const handleDeleteHero = async () => {
        try {
            await deleteHero(heroId);
            setDeleted(!deleted);
        } catch (error) {
        }
    };

    const savedSelectedImageIndex = localStorage.getItem('selectedImageIndex');


    return deleted ? (
        <article className="char_card">
            <div>
                <img
                    className="char_image"
                    src={imagesArray[savedSelectedImageIndex || 0]}
                    alt="char_img"
                    onClick={toggleIsOpen}
                />
                {openPhoto ? (
                    <div className="char_image-select">
                        {imagesArray.map((image: string, index: number) => (
                            <img
                                key={image}
                                className="char_image-photo char_image"
                                src={image}
                                alt={`char_img_${index}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                ) : null}
            </div>


            <div className="char_desc">
                <form onSubmit={handleSubmit}>
                    <div
                        onBlur={() => handleFieldBlur('nickname')}
                        onDoubleClick={() => handleFieldDoubleClick('nickname')}
                        className="char_desc_name"
                    >
                        {openFields.nickname ? (
                            <input
                                type="text"
                                className="char_desc_name"
                                name="nickname"
                                placeholder="Edit nickname..."
                                value={updatedData.nickname}
                                onChange={handleInputChange}
                            />
                        ) : (
                            updatedData.nickname || nickname
                        )}
                    </div>
                    <div
                        onBlur={() => handleFieldBlur('real_name')}
                        onDoubleClick={() => handleFieldDoubleClick('real_name')}
                        className="char_desc_name"
                    >
                        {openFields.real_name ? (
                            <input
                                type="text"
                                className="char_desc_name"
                                name="real_name"
                                placeholder="Edit real name..."
                                value={updatedData.real_name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            updatedData.real_name || real_name
                        )}
                    </div>
                    <div
                        onBlur={() => handleFieldBlur('catch_phrase')}
                        onDoubleClick={() => handleFieldDoubleClick('catch_phrase')}
                        className="char_desc_text"
                    >
                        {openFields.catch_phrase ? (
                            <input
                                name="catch_phrase"
                                className="char_desc_text"
                                placeholder="Edit catch phrase..."
                                value={updatedData.catch_phrase}
                                onChange={handleInputChange}
                            />
                        ) : (
                            updatedData.catch_phrase || catch_phrase
                        )}
                    </div>
                    <div
                        onBlur={() => handleFieldBlur('origin_description')}
                        onDoubleClick={() => handleFieldDoubleClick('origin_description')}
                        className="char_desc_text"
                    >
                        {openFields.origin_description ? (
                            <input
                                name="origin_description"
                                className="char_desc_text"
                                placeholder="Edit description..."
                                value={updatedData.origin_description}
                                onChange={handleInputChange}
                            />
                        ) : (
                            updatedData.origin_description || origin_description
                        )}
                    </div>
                    <div
                        onBlur={() => handleFieldBlur('superpowers')}
                        onDoubleClick={() => handleFieldDoubleClick('superpowers')}
                        className="char_desc_text"
                    >
                        {openFields.superpowers ? (
                            <input
                                name="superpowers"
                                className="char_desc_text"
                                placeholder="Edit superpowers..."
                                value={updatedData.superpowers}
                                onChange={handleInputChange}
                            />
                        ) : (
                            updatedData.superpowers || superpowers
                        )}
                    </div>
                    <div className="modal-buttons">
                    <button type="submit">Save</button>
                    <button  type="button" onClick={handleDeleteHero}>Delete Hero</button>
                    </div>

                </form>
            </div>
        </article>
    ) : (<>
        <div className="card_desc_name">
            Hero deleted
        </div>
    </>);
};
