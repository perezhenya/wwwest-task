import React from 'react';
import PropTypes from 'prop-types';
export const AuthContext = React.createContext();

export default class AuthContextContainer extends React.Component {

    state = {
        isAuth: false,
        user: null,
        token: null
    }
    setUser = (user) => {
        this.setState({
            isAuth: true,
            user
        })
    }

    setToken = token => {
        this.setState({
            token
        })
    }

    render = () => {
        const {setUser, setToken} = this;
        const {children} = this.props
        return(
            <AuthContext.Provider value={{
                data: this.state,
                setUser,
                setToken,
            }}>
                {children}
            </AuthContext.Provider>

        )
    }
}


AuthContextContainer.propTypes = {
    children: PropTypes.object.isRequired
}