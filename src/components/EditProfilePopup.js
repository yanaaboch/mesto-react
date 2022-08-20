import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateUser({
        title: name,
        subtitle: description,
    });
  };

  return (
    <PopupWithForm
                  name="edit"
                  title="Редактировать профиль"
                  buttonText="Сохранить"
                  isOpen={isOpen}
                  onClose={onClose}
                  onSubmit={handleSubmit}
                  >
                    <input className="popup__input popup__input_type_name" id="name-input" placeholder="Введите имя" name="title" type="text" minLength="2" maxLength="40" required value={name}
          onChange={handleNameChange} />
                    <span className="popup__input-error" id="name-input-error"></span>
                    <input className="popup__input popup__input_type_description" id="description-input" placeholder="Введите информацию о себе" name="subtitle" type="text" minLength="2" maxLength="200" required  value={description}
          onChange={handleDescriptionChange} />
                    <span className="popup__input-error" id="description-input-error"></span>
           
                  
              </PopupWithForm>
  );
};

export default EditProfilePopup;