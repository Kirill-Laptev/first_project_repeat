import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if(!this.props.isAuth){
                return <Redirect to={'/login'} />
            }

            return <Component {...this.props} />
        }
    }

    // Прячем логику внутрь HOC, с прокидыванием свойства isAuth
    let RedirectComponentContainer = connect(mapStateToPropsRedirect)(RedirectComponent) 

    return RedirectComponentContainer;
}

export default withAuthRedirect;