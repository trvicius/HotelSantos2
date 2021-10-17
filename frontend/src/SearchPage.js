import React, { useState, useEffect } from 'react'
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router-dom";
import Search from './Search';
import api from './services/api'



function SearchPage() {
    const history = useHistory();
    //const [showSearch, setShowSearch] = useState(false);
    const [rooms, setRooms] = useState([]);

    function checkRoom(id){
        alert('Clicou')
    }

    async function getRooms() {
        var response = await api.get("/rooms?reservado=true");

        //console.log(response);

        setRooms(response.data)
    }

    // async function book(id){
    //     var response = await api.patch(`/room/${id}`)

    //     console.log(response);

    //     setRooms(response.data)
    // }


    



    useEffect(getRooms, [])

    console.log(rooms)
    return (
        <div>
            <div className='banner' >
                {/* <div className='bannersearch'>
                    {showSearch && <Search />}

                    <Button onClick={() => setShowSearch(!showSearch)} className='bannersearchButton' variant='outlined'>
                        {showSearch ? "Hide" : "Search Dates"}
                    </Button>
                </div> */}
            </div>

            <div className='searchPage'>

                {
                    rooms.map(room => <SearchResult
                        onClick={() => checkRoom(room.id)}
                        img={room.img}
                        location={room.location}
                        title={room.title}
                        description={room.description}
                        star={room.star}
                        price={`R$ ${room.price} por noite`}
                        total="R$117 total"
                        key={room.id}
                    />)
                }

            </div>
        </div>
    )
}

export default SearchPage;