import React from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectUsers, selectLoading } from '@Redux/admin/admin.selectors';
import UserListContent from './user-list-content.component';

const UserList = ({ users }) => (
  <div className="w-11/12 mx-auto">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          users.map(({ id, email, username }) => (
            <UserListContent key={id} email={email} username={username} />
          ))
        }
      </Table.Body>
    </Table>
  </div>
);
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  isLoading: selectLoading
});
export default connect(mapStateToProps)(UserList);
