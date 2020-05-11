import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@Atoms/Icons/facebook.icon';
import TwitterIcon from '@Atoms/Icons/twitter.icon';
import { facebookShare, twitterShare } from '@Utils/helpers';

const fileURL = window.location.toString();
const SocialShare = ({ title, className }) => (
  <div className="mt-5">
    <span className={ className }>Share on:</span>
    <div className="flex">
      <FacebookIcon fill="#3b5998" className="mr-4 cursor-pointer" onClick={ () => (facebookShare(title, fileURL)) } />

      <TwitterIcon fill="#1DA1F2" className="ml-4 cursor-pointer" onClick={ () => (twitterShare(title, fileURL)) } />
    </div>
  </div>
);
SocialShare.propTypes = {
  title: PropTypes.string.isRequired
};
export default SocialShare;
