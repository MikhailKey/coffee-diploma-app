import React from 'react';

const CoffeeListItem = ({coffeeItem}) => {
    const {name, country, url, price} = coffeeItem;
    return (
        <div className="shop__item">
            <img src={url} alt="coffee"></img>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}$</div>
        </div>
    )
}

export default CoffeeListItem;