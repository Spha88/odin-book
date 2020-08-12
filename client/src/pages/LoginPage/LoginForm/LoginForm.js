import React from 'react';
import classes from './LoginForm.module.scss';

import { useForm } from 'react-hook-form';
import axios from '../../../axios.config';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.get('/users', { data })
            .then(res => {
                console.log("Axios Response: ", res);
            })
            .catch(err => {
                console.log("Axios Error: ", err);
            })
    }



    return (
        <form className={classes.LoginForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.FormControl}>
                <input type="text" name="username" placeholder="Email address or phone number"
                    ref={register}
                />
            </div>
            <div className={classes.FormControl}>
                <input type="password" name="password" placeholder="Password"
                    ref={register}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm
