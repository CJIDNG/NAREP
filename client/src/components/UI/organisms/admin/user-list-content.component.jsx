import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DeleteUser from './delete-user.component';
import EditUser from './edit-user.component';

const UserListContent = ({ email, username }) => (
  <Table.Row>
    <Table.Cell>{ email }</Table.Cell>
    <Table.Cell>{ username }</Table.Cell>
    <Table.Cell>
      <EditUser email={email} />
      <DeleteUser email={email} />
    </Table.Cell>
  </Table.Row>
);
UserListContent.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default UserListContent;
