import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserContext} from '../../../data/userData';
import PropTypes from 'prop-types';

const PrivateRoute = ({children,...rest}) => {
  const {user} = React.useContext(UserContext);

  return (
    <Route {...rest} render={()=>{
      return user.token
        ? children
        : <Redirect to='/login'></Redirect>;
    }}>
    </Route>
  );
};

PrivateRoute.propTypes= {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;
