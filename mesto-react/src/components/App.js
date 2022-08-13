import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



function App() {

const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen)
}

function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen)
}

function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
}

const handleCardClick = card => {
    setSelectedCard(card);
  };

function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div>
    <div className="page">
        <Header />
        <Main 
        onEditProfile={handleEditProfilePopupOpen}
        onAddPlace={handleAddPlacePopupOpen}
        onEditAvatar={handleEditAvatarPopupOpen}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                    <input className="popup__input popup__input_type_name" id="name-input" placeholder="Введите имя" name="title" type="text" minLength="2" maxLength="40" required />
                    <span className="popup__input-error" id="name-input-error"></span>
                    <input className="popup__input popup__input_type_description" id="description-input" placeholder="Введите информацию о себе" name="subtitle" type="text" minLength="2" maxLength="200" required />
                    <span className="popup__input-error" id="description-input-error"></span>
                    <button className="popup__save" id="profile-btn" type="submit">Сохранить</button>
                </>
            }
        />
        <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                    <input className="popup__input popup__input_type_cardname" id="cardname-input" placeholder="Название места" name="title" type="text" minLength="2" maxLength="30" required />
                    <span className="popup__input-error" id="cardname-input-error"></span>
                    <input className="popup__input popup__input_type_cardlink" id="link-input" placeholder="Ссылка на изображение" name="subtitle" type="url" required />
                    <span className="popup__input-error" id="link-input-error"></span>
                    <button className="popup__save" id="card-btn" type="submit">Создать</button>
                </>
            }
        />
        <PopupWithForm
            name="avatar-edit"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                    <input className="popup__input popup__input_type_cardlink" id="avatar-input" placeholder="Ссылка на изображение" name="subtitle" type="url" required />
                    <span className="popup__input-error" id="avatar-input-error"></span>
                    <button className="popup__save" id="card_avater-btn" type="submit">Сохранить</button>
                </>
            }
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        
        
        
        
        <div className="popup popup_confirm-delete">
            <div className="popup__container popup__overlay">
              <form className="popup__form" name="popupForm" noValidate>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__save">Да</button>
              </form>
              <button type="button" className="popup__close"></button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
