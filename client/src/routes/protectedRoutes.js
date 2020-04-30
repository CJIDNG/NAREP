/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ currentUser, component: Component, ...rest }) => {
  const role = currentUser ? currentUser.role : null;
  return (
    <>
      <Route
        {...rest}
        render={(props) => (role === 'admin'
          ? (<Component {...props} />) : (
            <Redirect to={{
              pathname: '/'
            }}
            />
          ))}
      />
    </>
  );
};
ProtectedRoute.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  component: PropTypes.shape({}).isRequired,
};
ProtectedRoute.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(ProtectedRoute);
