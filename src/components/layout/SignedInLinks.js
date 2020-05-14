import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class SignedInLinks extends Component {
    render() {
        return (
            
            <ul className="right">
                
                <li><NavLink to='/upload'  >upload files</NavLink></li>
                <li><NavLink to='/update' >Edit profile</NavLink></li>
                <li><NavLink to='/logout'  >log out</NavLink></li>
                </ul>
             
                
            
            
        )
    }
}

export default SignedInLinks
