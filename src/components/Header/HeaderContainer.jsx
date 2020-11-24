import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthData} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',  // Вместе с запросом передается наша кука
        {withCredentials: true})  // Разрешаем кроссбраузерные запросы
        .then((response) => {
            if(response.data.resultCode === 0){  // Код "0", значит что мы успешно залогинены
                let {id, login, email} = response.data.data; // Деструктуризация
                this.props.setAuthData(id, login, email);
            }
        })
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




export default connect(mapStateToProps, {setAuthData})(HeaderContainer);