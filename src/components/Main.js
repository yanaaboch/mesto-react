import React from "react";


import api from "../utils/api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUser()
        .then((data) => {
          setUserName(data.name);
          setUserDescription(data.about);
          setUserAvatar(data.avatar);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }, [])

    React.useEffect(() => {
        api
          .getInitialCards()
          .then((data) => {
            setCards(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-edit" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt={`Фото аватар ${userAvatar}`} />
                </button>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
              {cards.map((card) => {
                return <Card
                    key={card._id} 
                    card={card} onCardClick={props.onCardClick}
                    />
                })}  
                
            </section>
        </main>
)
}
    

export default Main;