import React from 'react';
import classes from './LoginForm.module.scss';

const LoginForm = () => {
    return (
        <form className={classes.LoginForm}>
            <div className={classes.FormControl}>
                <input type="text" name="username" placeholder="Email address or phone number" />
            </div>
            <div className={classes.FormControl}>
                <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm
