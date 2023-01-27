import { Component } from "react";
import "./NavbarStyles.css"
//import {Link} from 'react-router-dom';
import {MenuItems} from './Manuitems';
import logo from "../assets/logo-pappers-white.png"

class Navbar extends Component{
     /*initialising the state for the hamburger icon --> responsive navbar*/
    state = {clicked: false};  
    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {//cuz m extending the componenet
        return (
            <nav className="NavbarItems">
                < img src ={logo} alt="logo" className="navbarLogo"/>

                {/*the navbar responsivness*/}
                <div className="menu-icons"  onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fas fa-bars"}></i>
                    
                </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
                    {/*initialising the menuItems*/}
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}     {/*link to add */} 
                            </a>
                            {/*extracting the data from MenuItems */}
                        </li>
                        );
                    })}

                </ul>
            </nav>
        )
    }
}

export default Navbar;