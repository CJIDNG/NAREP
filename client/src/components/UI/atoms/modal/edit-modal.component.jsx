import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import { withRouter } from 'react-router-dom';
import EditDataFormElements from '@Components/UI/molecules/edit-dataset/edit-dataset-form.component';
import EditPolicyPaperFormElements from '@Molecules/edit-policy-paper/edit-form.component';

const DatasetModal = ({
  handleSubmit, handleChange, onChangeHandler, selectedTags, trigger, location, ...props
}) => (
    <Modal size="small" trigger={trigger}>
      <form className="w-9/12 mx-auto p-16" onSubmit={handleSubmit}>
        {
          location.pathname === '/policy-papers' ? (
            <EditPolicyPaperFormElements
              {...props}
              handleChange={handleChange}
              onChangeHandler={onChangeHandler}
              selectedTags={selectedTags}
              trigger={trigger}
            />
          ) : (
              <EditDataFormElements
                {...props}
                handleChange={handleChange}
                onChangeHandler={onChangeHandler}
                selectedTags={selectedTags}
                trigger={trigger}
              />
          )
        }

        <AuthButton>Submit</AuthButton>
      </form>
    </Modal>
);
DatasetModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  selectedTags: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
};
export default withRouter(DatasetModal);
