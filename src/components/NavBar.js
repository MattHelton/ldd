import React, { Component } from 'react';
import './Layout.css'

class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <a href='#' id='brand'>Lah Di Dah</a>
                <a href='okay'>Okay</a>
                <a href='goals'>Goals</a>
                <a href='pictures'>Pictures</a>
            </div>
        )
    }
}

export default NavBar