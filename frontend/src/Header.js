import React from 'react'
import './Header.css'
//import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";




function Header() {

    return (
        <div className='header'>
            <div className='header__logo'>
                <a href='/'>HS</a>
            </div>

            <div className='header__center'>
                {/*<input type="text" />*/}
                {/*<SearchIcon />*/}
            </div>

            <div className='header__right'>  
                {/*<Avatar />*/}   
                <a href='./search'>Quartos</a>
                <a href='./'>Contatos</a> 
                <a href='./loginpage'>Login</a> 
               {/*<LanguageIcon />*/}
                
            </div>
        </div>
    )
}

export default Header;