import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {authUser} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.authUser();
    }

    render() {
        return <Header isAuth={this.props.isAuth}
        userLogin={this.props.userLogin} />
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userLogin: state.auth.login,
    }
}




export default connect(mapStateToProps, {authUser})(HeaderContainer);