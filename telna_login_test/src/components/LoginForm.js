import React from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/reducer';
import Home from './home/index';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            this.props.isLoginSuccess ? <Home loginEmail={this.state.email}></Home>
            :
            <div className='login-form-wrapper' onSubmit={this.onSubmit}>
                <div className='login-form-inner-wrapper'>
                <form name='loginForm' className='loginForm'>
                    <h1>Login</h1>
                    <div className='login-form-email'>
                        {/* <label htmlFor='email'>Email:</label><br/> */}
                        <input type='email' name='email' placeholder='Email/Username' onChange={e => this.setState({email: e.target.value})} ref='loginEmail'></input>
                    </div>
                    <div className='login-form-password'>
                        {/* <label htmlFor='password'>Password:</label><br/> */}
                        <input type='password' name='password' placeholder='Password' onChange={e => this.setState({password: e.target.value})} ref='loginPassword'></input>
                    </div>
                    <div className='login-form-btn'><input type='submit' value='Sign in'></input></div>
                    <div className='login-form-message'>
                        {this.props.isLoginError ? <font className='err-message'>Invalid email or password</font> : ""}
                    </div>
                </form>
                </div>
            </div>
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {email, password} = this.state;
        this.props.login(email,password);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email,password) => dispatch(login(email,password))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);