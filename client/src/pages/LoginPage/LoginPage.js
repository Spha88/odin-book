import React from 'react';
import classes from './LoginPage.module.scss';
import facebook_name_logo from '../../assets/img/facebook_name_logo.svg';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className={classes.LoginPage}>
            <div className={classes.Message}>
                <img src={facebook_name_logo} alt="facebook logo" />
                <h2>Facebook helps you connect and share <br /> with the people in your life.</h2>
            </div>

            <div className={classes.FormContainer}>
                <div className={classes.LoginFormContainerInner}>
                    <LoginForm />

                    <div className={classes.ForgottenAccount}><a href="!#">Forgotten account?</a></div>
                    <div className={classes.HorizontalLine}></div>
                    <div className={classes.CreateNewAccount}>
                        <button>Create New Account</button>
                    </div>
                </div>

                <div className={classes.CreateBusinessPage}>
                    <p><strong><a href="!#">Create a Page</a></strong> for a celebrity, band or business</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
