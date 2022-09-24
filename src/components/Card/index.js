/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Card.module.scss';

function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false}) {
const [isAdded, setIsAdded] = React.useState(added);
const [isFavorite, setIsFavorite] = React.useState(favorited);

const onClickPlus = () => {
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
}
const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price});
    setIsFavorite(!isFavorite);
}
    return (
        <div className={styles.card}>
            <div className={styles.favorite} >
            <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="heart-unliked" onClick={onClickFavorite}/>
            </div>
            <img width={133} height={112} src={imageUrl}
             alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
            </div>
            <img 
                className={styles.plus} 
                onClick={onClickPlus}
                src = {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt = "Checked or Plus svg"/>
            </div>
            </div>
    );
}

export default Card;