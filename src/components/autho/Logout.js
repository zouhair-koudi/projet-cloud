import React, { Component } from 'react'
import { auth} from '../../firebase/fb';

export class Logout extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        }
    logout = () =>{
        auth.signOut().then(()=>{
            console.log("logout succes");
        }).catch((err) =>{
            console.log(err)
        });

    }
    render() {
        return (
            <div className='container'>
               <form onSubmit={this.handleSubmit} className='white'>
                   <h5 className='grey-texttext-darken-3 '>If you want to log out, click on LogOut</h5>
                   <div className='input-field'>
                     <button className="btn red lighten-1 z-depth-0" onClick={this.logout}>Logout</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Logout
