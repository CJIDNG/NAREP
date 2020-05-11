import React from 'react';
import PropTypes from 'prop-types';
import { handleDateFormat } from '@Utils/helpers';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import { deletePolicyPaperStarted } from '@Redux/policy-paper/delete-policy-paper/delete-policy-paper.actions';
import DownloadPolicyPaper from '@Atoms/dataset-download/dataset-download.component';
import EditPolicyPaper from '@Molecules/edit-policy-paper/edit-policy-paper.component';
import DeletePolicyPaper from '@Molecules/delete-dataset/dataset-delete.component';
import { Container, Title, Item } from './policy-papers.styles';

const PolicyPaperItem = ({
  id, title, updatedAt, slug, deletePolicyPaper, currentUser
}) => {
  const role = currentUser ? currentUser.role : null;
  const handleDelete = async (fileSlug) => deletePolicyPaper(fileSlug);
  return (
    <Container>
      <Item>
        <Title>
          { title }

          <span className="ml-3">
            (
          { handleDateFormat(updatedAt) }
            )
          </span>
        </Title>
      </Item>
      <>
        <DownloadPolicyPaper fileId={ id } path="policy-paper" />
      </>
      {
        role === 'admin' ? (
          <>
            <EditPolicyPaper slug={ slug } />
            <DeletePolicyPaper slug={ slug } handleDelete={ handleDelete } />
          </>
        ) : null
      }

    </Container>
  );
};
PolicyPaperItem.propTypes = {
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  deletePolicyPaper: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
};
PolicyPaperItem.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  deletePolicyPaper: (payload) => dispatch(deletePolicyPaperStarted(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(PolicyPaperItem);
