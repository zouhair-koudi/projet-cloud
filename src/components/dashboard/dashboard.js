import React , { Component } from "react";
import Description from './Description';

class dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m15">
                        <Description />
                    </div>


                </div>
            </div>

        )
    }
}
export default dashboard;
