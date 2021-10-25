import React, {useEffect, useState} from 'react'
import './Header.css'
//import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import api from "./services/api"



function Header() {

const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("hs:token"))
    
	const checkAuthentication = async (token) => {
    try {
    const res = await api.get("/users", { headers: { "Authorization": "Bearer " + token } })
      setAuthorized(res.status == 200)
    } catch (err) {
      setAuthorized(false)
    }
    setLoading(false)
}

  useEffect(() => {
    if (!authorized) {
        checkAuthentication(token);
    }
  }, [token]);

    return (
        <div className='header'>
            <div className='header__logo'>
                <a href='/home'>HS</a>
            </div>

            <div className='header__center'>
                {/*<input type="text" />*/}
                {/*<SearchIcon />*/}
            </div>

            <div className='header__right'>  
                {/*<Avatar />*/}   
                <a href='./search'>Quartos</a>
                <a href='./'>Contatos</a> 
                {authorized ? <a href="./" onClick={() => localStorage.removeItem("hs:token")}>Logout</a> : <a href='./'>Login</a>} 
               {/*<LanguageIcon />*/}
                
            </div>
        </div>
    )
}

export default Header;