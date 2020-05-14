import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends Component {
    render() {
        return (
            <ul className="right">
                
                
                <li><NavLink to='/signup'>signup</NavLink></li>
                <li><NavLink to='/signin'>login</NavLink></li>
            </ul>
        )
    }
}

export default SignedOutLinks