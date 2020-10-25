import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {userName: null, token: null};
};

const UserProvider = ({children}) => {
  const [user, setUser] = useState(getUserFromLocalStorage);

  const userLogin = user => {
    setUser(user);
    localStorage.setItem('user',JSON.stringify((user)));
  };

  const userLogout = () => {
    setUser({userName: null, token: null});
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{user, userLogin, userLogout}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserProvider;
