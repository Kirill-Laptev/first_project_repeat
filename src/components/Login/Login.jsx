import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { fieldRequired, maxLengthCreator } from '../../utilities/validators';
import { Input } from '../common/FormControls';

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return(
        <div>
            <h1>Login</h1>  
            <ReduxLoginForm onSubmit={onSubmit} />    
        </div>
    )
}


const maxLength30 = maxLengthCreator(30);
const maxLength10 = maxLengthCreator(10);



const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Login' component={Input} name='login' validate={[fieldRequired, maxLength30]}/></div>
            <div><Field type='password' placeholder='Password' component={Input} name='password' validate={[fieldRequired, maxLength10]}/></div>
            <div><Field type='checkbox' component={Input} name='checkbox' /> Remember Me</div>
            <div><button>Sign In</button></div>
        </form>
        
    )
}


const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default Login;