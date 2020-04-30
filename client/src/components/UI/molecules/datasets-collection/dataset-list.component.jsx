import React from 'react';
import PropTypes from 'prop-types';
import DataSetItem from '@Components/UI/atoms/datasets-item/datasets-item.component';
import { Pagination } from 'semantic-ui-react';

const DatasetLists = ({
  collections, collectionsCount, activePage, onChange
}) => {
  return (
    <>
      { collections.map(({ id, ...otherCollectionProps }) => (
        <DataSetItem key={ id } { ...otherCollectionProps } />
      )) }
      <div className="my-4 mx-auto">
        <Pagination
          className="mt-4"
          activePage={ activePage }
          onPageChange={ onChange }
          totalPages={ Math.floor(collectionsCount / 10) + 1 }
          ellipsisItem={ null }
        />
      </div>
    </>
  )
};
DatasetLists.propTypes = {
  collections: PropTypes.array.isRequired,
  collectionsCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatasetLists;
