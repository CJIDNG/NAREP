import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const DownloadFile = ({
  fileId, currentUser, history, path
}) => {
  const handleDownload = async (event) => {
    event.preventDefault();
    if (!currentUser) {
      history.push('/signup');
      return false;
    }
    window.open(`${process.env.REACT_APP_API_ROUTE}/${path}/downloads?id=${fileId}`);
  };
  return (
    <>
      <button
        type="button"
        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-2"
        onClick={handleDownload}
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button>
    </>
  );
};

DownloadFile.propTypes = {
  currentUser: PropTypes.shape({}),
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  path: PropTypes.string.isRequired,
  fileId: PropTypes.string.isRequired,
};
DownloadFile.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(DownloadFile));
