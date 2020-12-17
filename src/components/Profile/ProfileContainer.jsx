import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirectFull';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
    
        let userID = this.props.match.params.userID;  
        
        if(!userID){   // Делаем условие, что если приходит undefined в userID (когда мы кликаем на свою страницу), то передаем номер своего профиля
            userID = 12705;
        }

        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }

    // componentDidMount() {
        
    // }


    render() {
        return <Profile userProfile={this.props.userProfile} 
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}



const mapStateToProps = (state) => {
   return {
       userProfile: state.profilePage.userProfile,
       status: state.profilePage.status
   }
}


export default compose(
    connect(mapStateToProps,{
        getUserProfile: getUserProfileTC,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)

