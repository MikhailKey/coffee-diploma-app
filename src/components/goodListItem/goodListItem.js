import React from 'react';

const GoodListItem = ({goodItem}) => {
    const {name, country, url, price} = goodItem;
    return (
        <div className="shop__item">
            <img src={url} alt={name}></img>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}$</div>
        </div>
    )
}

export default GoodListItem;