import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {auth} from '../../firebase/fb';


class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user : {},
        }
      this.authListener = this.authListener.bind(this);
    }
   componentDidMount=()=>{
        this.authListener();
    }
  authListener=()=>{
        auth.onAuthStateChanged(user => {
            //console.log(user);
            if(user){
                this.setState({ user });
            }
            else{
                this.setState({ user : null});
            }
        });
    }
      
   
    render(){
        return (
           
            <nav className='nav-wrapper grey darken-3'>
                <div className='container'>
                
              
                <Link to='/' className='brand-logo'>Gestion et stockage des fichiers</Link>;   
                {this.state.user ? (<SignedInLinks />  ) : (<SignedOutLinks/>  )}    
                </div>

            </nav>
            
        )
    }
    
}

export default Navbar

