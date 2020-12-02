import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {   // HOC-функция
    class RedirectComponent extends React.Component {

        render() {
            if(!this.props.isAuth){    // Если не залогинен - сделай редирект на login
                return <Redirect to={'/login'} />
            }

            return <Component {...this.props} /> // В другом случае просто верни компоненту с props'ами
        }
    }
    return RedirectComponent;  // Контейнерная компонента возвращается
}

export default withAuthRedirect;