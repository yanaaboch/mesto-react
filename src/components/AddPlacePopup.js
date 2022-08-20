import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.value)
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddPlace({
            name: description,
            link: image
        });
    };

    return (
        <PopupWithForm
                name="add"
                title="Новое место"
                buttonText="Создать"
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={handleSubmit}>
                  
                          <input className="popup__input popup__input_type_cardname" id="cardname-input" placeholder="Название места" name="title" type="text" minLength="2" maxLength="30"  onChange={handleDescriptionChange} required />
                          <span className="popup__input-error" id="cardname-input-error"></span>
                          <input className="popup__input popup__input_type_cardlink" id="link-input" placeholder="Ссылка на изображение" name="subtitle" type="url" onChange={handleImageChange} required />
                          <span className="popup__input-error" id="link-input-error"></span>
                          
            
        </PopupWithForm>
    )
};

export default AddPlacePopup;