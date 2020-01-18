import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from "./AuthContext";

const PrivateRoute = ({location,...props}) => {
   return(
             <AuthContext.Consumer>
                 {
                val => {
                    if (val.data.isAuth) {
                        return <Route {...props}/>
                    } else {
                        return <Redirect to={{
                            pathname: '/login',
                            state: {
                            from: location.pathname
                            }
                        }}
                                />
                        }
                    }
                }
             </AuthContext.Consumer>
    )
}

export default PrivateRoute;
