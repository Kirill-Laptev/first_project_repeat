import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';



  const App = (props) => {
    return (
     
        <div className="wrapper">
          <Header />
          <div className="content_wrapper">
            <Navbar />
            <Route path='/profile' render={ () => <Profile />} />
            <Route path='/messages' render={ () => <MessagesContainer />} />
            <Route path='/users' render={ () => <UsersContainer />} />
          </div>
        </div>
       
    );
  };



export default App;
