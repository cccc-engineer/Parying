import React, {Component} from "react";

class Login extends Component{
    render(){
        return(
            <div className = "login-box">
                <h1>Log in</h1>
                <div className="email-box">
                    <label for="email" className="email-label">Email</label>
                    <div className="email-input-element">
                        <input type="text" name="email-text" id="email-text" className="email-input"/>
                    </div>
                </div>
                <div className="password-box">
                    <label for="password" className="password-label">Password</label>
                    <div className="password-input-element">
                        <input type="text" name="pwd-text" id="pwd-text" className="pwd-input"/>
                    </div>
                </div>
                <div className="rem-box">
                <div>
                    <input type="checkbox" name="remember-me" id="remember-me" value="remember-me"/>
                    <label for="remember-me" className="rem-label">Remember Me</label>
                </div>
                </div>
                <button id="login-button">Login</button>
                <h2>Or Login With</h2>
                <div className="google-logo">
                    <input type="image" src="https://live.staticflickr.com/65535/50670283607_5db1bce138_t.jpg" alt="google logo" width="120" height="35"/>
                </div>
                <div className="facebook-logo">
                    <input type="image" src="https://live.staticflickr.com/65535/50670203706_0d7b1c618c_t.jpg" alt="facebook logo" width="120" height="35"/>
                </div>
            </div>
        );
    }
}

export default Login;