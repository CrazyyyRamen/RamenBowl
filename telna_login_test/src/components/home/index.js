import React from 'react';
import users from '../../data/user.json';
import {logOut} from '../../redux/reducer';
import {connect} from 'react-redux';

class Home extends React.Component{
    constructor(props){
        super(props);
        const userList = users.user.find(u => u.email === props.loginEmail)
        this.state = {
            ...userList
        }
    }

    handleLogout(){
        this.props.logOut()
    }

    render(){
        return(
            <div className='dashboard'>
                <div className='dashboard-head'>
                    <h3>Welcome, {this.state.firstName} {this.state.lastName}</h3>
                </div>
                <div className='dashboard-body'>
                    <div className='user-info phone'>
                        <font>Phone Number: </font>
                        <label>{this.state.phoneNumber}</label>
                    </div>
                    <hr></hr>
                    <div className='user-info address'>
                        <font>Address: </font>
                        <label>{this.state.address}</label>
                    </div>
                    <hr></hr>
                    <div className='user-info avatar'>
                        <font>Avatar: </font>
                        <label>{this.state.avatar}</label>
                    </div>
                    <hr></hr>
                </div>
                <div className='dashboard-foot'>
                    <button onClick={this.handleLogout.bind(this)}>Log out</button>
                </div>
            </div>
        )
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
        logOut: () => dispatch(logOut())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)