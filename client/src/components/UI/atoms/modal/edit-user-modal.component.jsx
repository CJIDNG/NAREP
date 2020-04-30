import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import Select from '@Components/UI/atoms/form-input/form-select-user.component';

const DatasetModal = ({
  handleSubmit, handleChange, trigger, ...props
}) => (
    <Modal size="small" trigger={trigger}>
      <form className="w-9/12 mx-auto p-16" onSubmit={handleSubmit}>
        <Select handleChange={handleChange} />
        <AuthButton>Submit</AuthButton>
      </form>
    </Modal>
);
DatasetModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
export default DatasetModal;
