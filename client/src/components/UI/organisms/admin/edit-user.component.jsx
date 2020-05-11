import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditUserModal from '@Atoms/modal/edit-user-modal.component';
import { updateUserStarted } from '@Redux/admin/admin.actions';
import PropTypes from 'prop-types';
import EditIcon from '@Atoms/Icons/edit.icon';

const EditUser = ({ email, updateUser, }) => {
  const [userRole, setUserRole] = useState({
    role: ''
  });
  const { role } = userRole;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserRole({ ...userRole, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser({ email, role });
  };
  return (
    <EditUserModal
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      trigger={ <EditIcon className="cursor-pointer" /> }
    />
  );
};
EditUser.propTypes = {
  email: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch(updateUserStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditUser);
