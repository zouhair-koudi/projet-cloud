import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import dashboard from "./components/dashboard/dashboard";
import SignIn from './components/autho/SignIn';
import SignUp from './components/autho/SignUp';
import Update from './components/autho/Update';
import UploadFiles from './components/projects/UploadFiles';
import Logout from './components/autho/Logout';
import {auth} from './firebase/fb'



class App extends Component {
 
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
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      
      <Route   path="/upload" component={UploadFiles} />
        
        <Route exact path="/update" component={Update} />
        
        <Route exact path="/" component={dashboard} />
        <Route  path="/signup" component={SignUp} /> 
          
       {this.state.user ?  <Route  path="/logout" component={Logout} />  :  ( <Route  path="/signin" component={SignIn} />    )}
      </Switch>
      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
