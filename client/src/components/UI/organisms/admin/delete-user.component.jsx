import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUserStarted } from '@Redux/admin/admin.actions';
import DeleteModal from '@Atoms/modal/delete-modal.component';

const DeleteUser = ({ email, deleteUser }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteUser(email);
  };
  return (
    <DeleteModal handleDelete={handleDelete} />
  );
};
DeleteUser.propTypes = {
  email: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  deleteUser: (payload) => dispatch(deleteUserStarted(payload))
});
export default connect(null, mapDispatchToProps)(DeleteUser);
