import React from "react";

const Card = ({card, onCardClick}) => {
        const handleClick = () => {
        onCardClick(card);
        };
    return (
        <article className="element" key={card._id}>
                <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
                <button className="element__delete-button" type="button" aria-label="Удалить"></button>
                <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                    <div className="likes">
                        <button className="element__like-button" type="button" aria-label="Лайк"></button>
                        <div className="element__count_like">{card.likes.length}</div>
                    </div>
                </div>
                </article>
    )
}

export default Card;