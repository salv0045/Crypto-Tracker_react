import React from 'react'

const coin = ({name, image, symbol, price, volume }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p1 className="coin-symbol">{symbol}</p1>

                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>

                </div>
            </div>
        </div>
    )
}

export default coin


