import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PolicyPaperCollection from '@Molecules/policy-papers-collection/policy-papers-collection';
import CreatePolicyPaper from '@Molecules/create-policy-paper/create-policy-paper.component';

const PolicyPaperContainer = ({ currentUser }) => {
  const role = currentUser ? currentUser.role : null;
  return (
    <>
      <div className="m-6">
        {
          role === 'admin' ? (
            <div className="m-4 ">
              <CreatePolicyPaper />
            </div>
          ) : null
        }

      </div>
      <PolicyPaperCollection />
    </>
  );
};
PolicyPaperContainer.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
};
PolicyPaperContainer.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(PolicyPaperContainer);
