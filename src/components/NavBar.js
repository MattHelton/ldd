import React, { Component } from 'react';
import './Layout.css'

class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <a href='/' id='brand'>Lah Di Dah</a>
                <a href='images'>Images</a>
                <a href='plans'>Plans</a>
                <a href='actions'>Actions</a>
            </div>
        )
    }
}

export default NavBar