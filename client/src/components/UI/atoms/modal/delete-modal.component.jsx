import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DeleteIcon from '@Atoms/Icons/delete.icon';

const DeleteModal = ({ handleDelete }) => {
  const [state, setState] = useState({
    open: false,
  });

  const closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  const close = () => setState({ open: false });
  const { open, closeOnEscape, closeOnDimmerClick } = state;
  return (
    <>
      <DeleteIcon className="cursor-pointer" onClick={closeConfigShow(true, false)} />
      <Modal
        open={open}
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        onClose={close}
      >
        <Modal.Header>Delete Dataset</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this dataset</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={close} negative>
            No
            </Button>
          <Button
            onClick={handleDelete}
            positive
            labelPosition="right"
            icon="checkmark"
            content="Yes"
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};
DeleteModal.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
export default DeleteModal;
