import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import { signOutStart } from '@Redux/user/user.action';

const Header = ({ currentUser, logOutUser }) => {
  const role = currentUser ? currentUser.role : null;
  const menuStyles = {
    color: '#fff',
    fontSize: '1.2rem',
    marginRight: '10px',
  };
  const authStyles = {
    background: 'white',
    color: 'teal',
    borderRadius: '5px',
    width: '10rem',
    textAlign: 'center',
    marginRight: '50px',
  };
  const signupStyles = {
    border: '1px solid white',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 15px',
    lineHeight: '27px',
    fontSize: '1.2rem',
    width: '8rem',
    textAlign: 'center',
  };
  const containerStyles = {
    background: 'teal',
    padding: '1.5rem 2rem'
  };
  return (

    <Navbar collapseOnSelect expand="lg" style={containerStyles}>
      <Navbar.Brand as={Link} to="/" style={menuStyles}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/datasets" style={menuStyles}>Datasets</Nav.Link>
          <Nav.Link href="https://github.com/CJIDNG/NAREP-BE" target="_blank" style={menuStyles}>Developers</Nav.Link>
          <Nav.Link href="https://faacfacts.ptcij.org/" target="_blank" style={menuStyles}>FAAC Facts</Nav.Link>
          <Nav.Link as={Link} to="/policy-papers" style={menuStyles}>Policy Papers</Nav.Link>
          <Nav.Link style={menuStyles} href="/blog">Blog</Nav.Link>
        </Nav>
        {
          currentUser ? (
            <Nav>
              {
                role === 'admin' ? (
                  <Nav.Link as={Link} to="/admin-dashboard" style={authStyles}>Admin Dashboard</Nav.Link>
                ) : null
              }
              <Button variant="outline-light" onClick={logOutUser}>Logout</Button>
            </Nav>
          ) : (
              <Nav>
                <Nav.Link as={Link} to="/signin" style={menuStyles}>Sign In</Nav.Link>
                <Nav.Link as={Link} to="/signup" style={signupStyles}>Register</Nav.Link>
              </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  logOutUser: PropTypes.func.isRequired,
};
Header.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(signOutStart())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
