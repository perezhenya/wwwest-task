import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import store from '../redux/store';
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import AuthContext from './AuthContext';
import '../styles/App.css';

import '../styles/App.css';

const Wrapper = () => {
  return (
   <BrowserRouter>
    <AuthContext>
    <Provider store={store}>
      <div className="Wrapper">
        <header>
          <ul>
            <li><Link to="/">To the main</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </header>
        <Switch>
          {
            routes.map((route, key) => {
              if (!route.private) {
              return <Route key={key} {...route}/>
              } else {
                return <PrivateRoute key={key} {...route}/>
              }
            })
          }
        </Switch>
     </div>
    </Provider>
    </AuthContext>
   </BrowserRouter>
  );
}

export default Wrapper;
