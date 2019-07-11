import React from 'react';

const OurBestItem = ({coffeeBestItem}) => {
    const {name, url, price} = coffeeBestItem;
    return (
        <>
         <div className="best__item">
                        <img src={url} alt="coffee"></img>
                        <div className="best__item-title">
                           {name} 
                        </div>
                        
                        <div className="best__item-price">{price}</div>
                    </div>
        </>
    )
}

export default OurBestItem;