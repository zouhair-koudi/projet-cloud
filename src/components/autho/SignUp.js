import React, { Component } from 'react';
import fb from '../../firebase/fb';


class SignUp extends Component {
    state = {
        email : '',
        password:'',
        firstName:'',
        lastName:''
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
createUserWithEmailAndPasswordHandler = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fb.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        //console.log('Error: ' + err.toString());
        alert(err);
      })
  };
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-texttext-darken-3 '>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlform="firstName">FirstName*</label>
                        <input type='text' id='firstName' onChange={this.handleChange} />

                    </div>
                    <div className='input-field'>
                        <label htmlform="lastName">LastName*</label>
                        <input type='text' id='lastName' onChange={this.handleChange} />

                    </div>
                    <div className='input-field'>
                        <label htmlform="email">Email*</label>
                        <input type='email' id='email' onChange={this.handleChange} />

                    </div>
                    <div className='input-field'>
                        <label htmlform="password">Password*</label>
                        <input type='password' id='password' onChange={this.handleChange} />

                    </div>
                    
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.createUserWithEmailAndPasswordHandler}>Sign Up</button>

                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignUp;