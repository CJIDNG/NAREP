import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Spinner from '@Atoms/spinner/spinner.component';
import { selectUsers, selectLoading } from '@Redux/admin/admin.selectors';
import { fetchUsersStarted } from '@Redux/admin/admin.actions';
import UserList from './user-list.component';

const UserTableContainer = ({ fetchUsers, users, isLoading }) => {
  useEffect(() => {
    const getAllUsers = async () => {
      await fetchUsers();
    };
    getAllUsers();
  }, [fetchUsers]);
  return (
    <>
      {
        isLoading ? <Spinner /> : <UserList {...users} />
      }
    </>
  );
};
UserTableContainer.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  isLoading: selectLoading
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersStarted())
});
export default connect(mapStateToProps, mapDispatchToProps)(UserTableContainer);
