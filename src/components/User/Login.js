import React from 'react';
import './Login.css';



function Login(props) {

    return (
        <div class='container'>
            <p>Login</p>
            <form>
                <div class='row'>
                    <div class='col-25'>
                        <label for='email'>Email</label>
                    </div>
                    <div class='col-75'>
                        <input placeholder='email' />
                    </div>
                </div>
                <div class='row'>
                    <div class='col-25'>
                        <label for='password'>Password</label>
                    </div>
                    <div class='col-75'>
                        <input placeholder='password' />
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Login