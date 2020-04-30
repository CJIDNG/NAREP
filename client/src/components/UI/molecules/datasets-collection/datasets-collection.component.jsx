import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectItems, selectItemsCount, selectSectors } from '@Redux/datasets/get-datasets/datasets.selectors';
import { fetchDatasetsStarted } from '@Redux/datasets/get-datasets/datasets.actions';
import { withRouter, useLocation } from 'react-router-dom';
import Collection from '../fetch-collections/fetch-collections.component';

const DatasetCollection = ({ fetchDatasets, collections, collectionsCount }) => {
  const query = new URLSearchParams(useLocation().search);
  const queryString = query.get('sectorId');
  const getAllDatasets = async (page, sectorId) => fetchDatasets(page, sectorId);
  return (
    <Collection
      onCollectionFetch={ getAllDatasets }
      queryString={ queryString }
      collections={ collections }
      collectionsCount={ collectionsCount }
      listType="datasets"
    />
  );
};

DatasetCollection.propTypes = {
  fetchDatasets: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired,
  collectionsCount: PropTypes.number.isRequired,
};
const mapStateToProps = createStructuredSelector({
  collections: selectItems,
  collectionsCount: selectItemsCount,
  sectors: selectSectors
});
const mapDispatchToProps = (dispatch) => ({
  fetchDatasets: (page, sectorId) => dispatch(fetchDatasetsStarted(page, sectorId))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DatasetCollection));
