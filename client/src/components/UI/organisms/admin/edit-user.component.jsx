import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditUserModal from '@Components/UI/atoms/modal/edit-user-modal.component';
import { updateUserStarted } from '@Redux/admin/admin.actions';
import PropTypes from 'prop-types';

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
      onFormSubmit={handleSubmit}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      trigger={<button type="button" className="h-10 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>}
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
