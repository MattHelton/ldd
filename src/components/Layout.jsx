import React, {Component} from 'react';
import ScreensRoot from './ScreensRoot'
import NavBar from './NavBar'
// import SideBar from './SideBar'

class Layout extends Component {

    render() {
        return (
    <div>
        <NavBar />
        {/* <SideBar /> */}
        <ScreensRoot />
    </div>
        )
    }      
}

export default Layout