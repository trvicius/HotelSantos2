import React, {useState} from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import api from './services/api'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    id,
    updateList
}) {
    async function getReserva() {
        var response = await api.patch(`/room/${id}`, []);

        if (response.status == 200) alert(`${title} reservado com sucesso!`)
        
        updateList()
    }

    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                        <button className="reserva" onClick={getReserva}>Fazer Reserva</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;