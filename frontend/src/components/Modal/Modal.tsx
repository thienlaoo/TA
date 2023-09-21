import React, { useState } from 'react';
import { CreateHero } from '../types/Hero';
import './Modal.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: CreateHero) => void;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState<CreateHero>({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: [],
    });
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const newValue = name === 'images' ? [value] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async () => {
        fetch('http://localhost:3001/heroes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Hero created successfully:', data);
            })
            .catch(error => {
                console.error('Error creating hero:', error);
            });

        onClose();
    };



    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Create New Hero</h2>
                <form>
                    <div className="form-group">
                        <label>Nickname:</label>
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Real Name:</label>
                        <input
                            type="text"
                            name="real_name"
                            value={formData.real_name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Origin Description:</label>
                        <input
                            type="text"
                            name="origin_description"
                            value={formData.origin_description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Superpowers:</label>
                        <input
                            type="text"
                            name="superpowers"
                            value={formData.superpowers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Catch Phrase:</label>
                        <input
                            type="text"
                            name="catch_phrase"
                            value={formData.catch_phrase}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image: paste URL</label>
                        <input
                            type="text"
                            name="images"
                            value={formData.images}
                            onChange={handleInputChange}
                        />
                    </div>

                </form>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    ) : null;
};
