import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DataSetCollection from '@Molecules/datasets-collection/datasets-collection.component';
import DatasetFilter from '@Molecules/datasets-filter/datasets-filter.component';
import { selectItemsCount, selectItems } from '@Redux/datasets/get-datasets/datasets.selectors';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import CreateDataset from '@Components/UI/molecules/create-dataset/create-dataset.component';
import SearchBar from '@Atoms/search-bar/search-bar.component';
import { searchDatasetStarted } from '@Redux/datasets/get-datasets/datasets.actions';
import { DatasetFilterContainer, Container } from './datasets-container.styles';

const DatasetContainer = ({ collectionsCount, currentUser, searchDataset, collections }) => {
  const role = currentUser ? currentUser.role : null;

  const search = async (searchKey) => {
    await searchDataset(searchKey);
  };
  return (
    <>
      <Container>
        <DatasetFilterContainer>
          <DatasetFilter />
        </DatasetFilterContainer>
        <div className="w-1/2 p-2 m-4">
          <div className="flex flex-col">
            {
              role === 'admin' ? (
                <div className="m-4 ">
                  <CreateDataset />
                </div>
              ) : null
            }
            <SearchBar collectionsCount={ collectionsCount } search={ search } />
            <div className="m-3">
              <span className="mr-3">
                { collectionsCount }
              </span>
              results
          </div>
            <DataSetCollection />
          </div>
          <div />
        </div>
      </Container>
    </>
  );
};
DatasetContainer.propTypes = {
  collectionsCount: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  searchDataset: PropTypes.func.isRequired,
};
DatasetContainer.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  collectionsCount: selectItemsCount,
  currentUser: selectCurrentUser,
  collections: selectItems
});
const mapDispatchToProps = (dispatch) => ({
  searchDataset: (page, sectorId) => dispatch(searchDatasetStarted(page, sectorId))
});
export default connect(mapStateToProps, mapDispatchToProps)(DatasetContainer);
