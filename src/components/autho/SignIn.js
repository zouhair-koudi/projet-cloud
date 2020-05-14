import React, { Component } from 'react';
import fb, { auth } from '../../firebase/fb';
import { signInWithGoogle } from '../../firebase/fb';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signInWithEmailAndPasswordHandler = this.signInWithEmailAndPasswordHandler.bind(this);
        
        this.state = {
            email : '',
            password:''
        }

    }
    
unsubscribeFromAuth = null;
 
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
      });
    }
   
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit= (e) => {
    e.preventDefault();
    console.log(this.state);
}
signInWithEmailAndPasswordHandler = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fb.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        //console.log('Error: ' + err.toString());
        alert(err);
      })
       }


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-texttext-darken-3 '>Sign In</h5>
                    <div className='input-field'>
                        <label htmlform="email">Email*</label>
                        <input type='email' id='email' onChange={this.handleChange} />

                    </div>
                    <div className='input-field'>
                        <label htmlform="password">Password*</label>
                        <input type='password' id='password' onChange={this.handleChange} />

                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.signInWithEmailAndPasswordHandler}>Login</button>

                    </div>
                    <h5>Or, you can </h5>
                    <div className='input-field' >
                        <button className="btn green lighten-1 z-depth-0" onClick={signInWithGoogle} >Sign in with Google</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn;