import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Hero } from '../types/Hero';
import './Add.scss';

export const Add = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleSave = (formData: Hero) => {
        console.log('New hero data:', formData);
    }

    return (
        <>
            {isOpen ? (
                <Modal isOpen={isOpen} onClose={handleClose} onSave={handleSave} />
            ) : (
                <div className="cardlist_more_wrapper">
                    <button
                        className="cardlist_more"
                        onClick={handleClick}
                    >+</button>
                </div>
            )}
        </>
    );
}
