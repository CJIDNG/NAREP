import React from 'react';
import PropTypes from 'prop-types';
import PolicyPaperItem from '@Components/UI/atoms/policy-papers-item/policy-papers-item.component';
import { Pagination } from 'semantic-ui-react';

const PolicyPaperLists = ({
  collections, collectionsCount, activePage, onChange
}) => (
    <div className="mt-8">
      { collections.map((item) => (
        <PolicyPaperItem key={item.id} {...item} />
      )) }
      <div className="my-8 mx-auto flex justify-center">
        <Pagination
          className="mt-4"
          activePage={activePage}
          onPageChange={onChange}
          totalPages={Math.floor(collectionsCount / 10) + 1}
          ellipsisItem={null}
        />
      </div>
    </div>
);
PolicyPaperLists.propTypes = {
  collections: PropTypes.array.isRequired,
  collectionsCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PolicyPaperLists;
