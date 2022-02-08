import React, { Component, Fragment } from "react";
import "./style.css"

export class LoginForm extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    onSubmitForm = (event) => {
        const {userName, password} = this.props.inpVal;
        if((userName == event.target.username.value) && (password == event.target.password.value)){
            alert("logged in successfully")
        }else{
            alert("Username or password is wrong")
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmitForm} className="Login_Form">
                <div className="Login_container">
                    <div className="Login_Input">            
                        UserName<input type="text" name="username"/>
                    </div>
                    <div className="Login_Input">
                        Password<input type="text" name="password"/>               
                    </div>
                    <div className="Login_Input">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}