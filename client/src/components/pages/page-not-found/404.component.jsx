import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '@Organisms/header/header.component';
import { Image } from './error.styles';
import ButtonTeal from '@Atoms/button-teal/button-teal.component';

const PageNotFound = ({ history }) => {
  const handleRedirect = (event) => {
    event.preventDefault();
    history.push('/');
  };
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center self-center mt-10">

        <Image src={ `${process.env.PUBLIC_URL}/img/404.png` } alt="Page not found" />
        <div className="flex justify-center self-center flex-col">
          <div className="font-semibold text-4xl">Not Found</div>
          <p>We couldn’t find your page</p>
          <ButtonTeal text='Back to homepage' onClick={ handleRedirect } />
        </div>

      </div>
    </>
  );
};
PageNotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
};
export default withRouter(PageNotFound);
