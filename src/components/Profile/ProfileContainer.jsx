import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import {getUserProfileTC} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
    
        let userID = this.props.match.params.userID;  
        
        if(!userID){   // Делаем условие, что если приходит undefined в userID (когда мы кликаем на свою страницу), то передаем номер своего профиля
            userID = 2;
        }

        this.props.getUserProfile(userID);
    }


    render() {
        
        return <Profile userProfile={this.props.userProfile} />
    }
}



const mapStateToProps = (state) => {
   return {
       userProfile: state.profilePage.userProfile,
   }
}


let UrlDataContainerComponent = withRouter(ProfileContainer);  // Оборачиваем в обертку для получения url



export default connect(mapStateToProps,{
    getUserProfile: getUserProfileTC})(UrlDataContainerComponent)